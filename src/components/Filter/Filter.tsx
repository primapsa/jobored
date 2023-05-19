import React, {useEffect} from 'react';
import {Button, Flex, NumberInput, Paper, Select, Text} from "@mantine/core";
import {IconChevronDown, IconX} from '@tabler/icons-react';
import {CataloguesType} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {
    addCurrentCatalog,
    addPaymentFromValue,
    addPaymentToValue,
    PaymentType,
    resetFilter
} from "../../redux/filterReducer";
import {fetchVacanciesByQueryString} from "../../redux/jobReducer";
import {useFilterStyle} from "./filterStyle";

const INPUT_STEP = 1000;
const INPUT_MIN = 0;
const Filter = () => {
    const {classes} = useFilterStyle();
    const dispatch = useDispatch();

    useEffect(() => {
        //  dispatch<AppDispatch>(fetchCatalogues())
    }, [])

    const catalogState = useSelector<AppStateType, CataloguesType[]>(state => state.filter.fields.catalogues)
    const currentCatalog = useSelector<AppStateType, null | string>(state => state.filter.fields.currentCatalog)
    const paymentFromValue = useSelector<AppStateType, PaymentType>(state => state.filter.fields.paymentFrom)
    const paymentToValue = useSelector<AppStateType, PaymentType>(state => state.filter.fields.paymentTo)

    const catalog = catalogState.map(c => ({'value': String(c.key), 'label': String(c.title_trimmed)}))

    const currentCatalogHandler = (id: string | null) => dispatch(addCurrentCatalog(id))
    const addPaymentFromHandler = (value: string | number) => dispatch(addPaymentFromValue(Number(value)))
    const addPaymentToHandler = (value: number | string) => dispatch(addPaymentToValue(Number(value)))
    const onClickHandler = () => dispatch<AppDispatch>(fetchVacanciesByQueryString())
    const resetFilterHandler = () => dispatch(resetFilter())


    return (
        <Paper className={classes.container}>
            <Flex direction={'column'}>
                <Flex align={'center'} justify={'space-between'}>
                    <Text className={classes.header}>Фильтры</Text>
                    <Button
                        onClick={resetFilterHandler}
                        rightIcon={<IconX/>}
                        className={classes.reset}
                        classNames={{label: classes.label, rightIcon: classes.rightIcon}}>Сбросить все</Button>
                </Flex>
                <form>

                    <Select
                        mt="md" withinPortal
                        data={catalog}
                        placeholder="Выберите отрасль"
                        label={'Отрасль'}
                        value={currentCatalog}
                        onChange={currentCatalogHandler}
                        classNames={{
                            label: classes.title,
                            input: classes.select,
                            rightSection: classes.selectRightSection
                        }}
                        rightSection={<IconChevronDown color={'#ACADB9'}/>}/>

                    <NumberInput
                        placeholder="От"
                        onChange={addPaymentFromHandler}
                        value={paymentFromValue || ''}
                        step={INPUT_STEP} min={INPUT_MIN}
                        startValue={1000}
                        label={'Оклад'}
                        classNames={{
                            label: classes.numberTitle,
                            input: classes.select,
                            controlUp: classes.numberUp,
                            controlDown: classes.numberDown,
                            rightSection: classes.selectRightSection
                        }}/>
                    <NumberInput
                        className={classes.imputTo}
                        placeholder="До"
                        onChange={addPaymentToHandler}
                        value={paymentToValue || ''}
                        step={INPUT_STEP} min={Number(paymentFromValue) || (INPUT_MIN + INPUT_STEP)}
                        classNames={{
                            input: classes.select,
                            controlUp: classes.numberUp,
                            controlDown: classes.numberDown,
                            rightSection: classes.selectRightSection
                        }}/>
                    <Button className={classes.submit} onClick={onClickHandler}>Применить</Button>
                </form>
            </Flex>
        </Paper>
    );
};

export default Filter;