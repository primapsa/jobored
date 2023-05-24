import React, {useCallback, useEffect, useMemo} from 'react';
import {Button, Flex, NumberInput, Paper, Text} from "@mantine/core";
import {IconX} from '@tabler/icons-react';
import {CataloguesType} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {
    addCurrentCatalog,
    addPaymentFromValue,
    addPaymentToValue,
    clearSearchQueries,
    fetchActualCatalogues,
    PaymentType
} from "../../redux/filterReducer";
import {fetchVacanciesByQueryString} from "../../redux/jobReducer";
import {useFilterStyle} from "./filterStyle";
import {INPUTS} from "../../const/inputs";
import FilterSelect from "../FilterSelect/FilterSelect";

const Filter = () => {
    const {classes} = useFilterStyle();
    const dispatch = useDispatch();

    useEffect(() => dispatch<AppDispatch>(fetchActualCatalogues()), [])

    const catalogState = useSelector<AppStateType, CataloguesType[]>(state => state.filter.fields.catalogues)
    const currentCatalog = useSelector<AppStateType, null | string>(state => state.filter.fields.currentCatalog)
    const paymentFromValue = useSelector<AppStateType, PaymentType>(state => state.filter.fields.paymentFrom)
    const paymentToValue = useSelector<AppStateType, PaymentType>(state => state.filter.fields.paymentTo)

    const catalog = useMemo(() => catalogState
        .map(c => ({'value': String(c.key), 'label': String(c.title_trimmed)})),[catalogState])

    const currentCatalogHandler = useCallback((id: string | null) =>
        dispatch(addCurrentCatalog(id)),[dispatch])
    const addPaymentFromHandler = useCallback((value: string | number) =>
        dispatch(addPaymentFromValue(Number(value))),[dispatch])
    const addPaymentToHandler = useCallback((value: number | string) =>
        dispatch(addPaymentToValue(Number(value))),[dispatch])
    const onClickHandler = useCallback(() =>
        dispatch<AppDispatch>(fetchVacanciesByQueryString()),[dispatch])
    const resetFilterHandler = useCallback(() =>
        dispatch<AppDispatch>(clearSearchQueries()),[dispatch])

    return (
        <Paper className={classes.container}>
            <Flex direction={'column'}>
                <Flex align={'center'} justify={'space-between'}>
                    <Text className={classes.header}>Фильтры</Text>
                    <Button
                        onClick={resetFilterHandler}
                        rightIcon={<IconX/>}
                        className={classes.reset}
                        classNames={{
                            label: classes.label,
                            rightIcon: classes.rightIcon
                        }}>
                        Сбросить все
                    </Button>
                </Flex>
                <form>
                    <FilterSelect
                        catalog={catalog}
                        currentCatalog={currentCatalog}
                        callBack={currentCatalogHandler}/>
                    <NumberInput
                        data-elem="salary-from-input"
                        placeholder="От"
                        onChange={addPaymentFromHandler}
                        value={paymentFromValue || ''}
                        step={INPUTS.STEP} min={INPUTS.MIN}
                        startValue={INPUTS.START}
                        label={'Оклад'}
                        classNames={{
                            label: classes.numberTitle,
                            input: classes.select,
                            controlUp: classes.numberUp,
                            controlDown: classes.numberDown,
                            rightSection: classes.selectRightSection
                        }}/>
                    <NumberInput
                        data-elem="salary-to-input"
                        className={classes.imputTo}
                        placeholder="До"
                        onChange={addPaymentToHandler}
                        value={paymentToValue || ''}
                        step={INPUTS.STEP} min={Number(paymentFromValue) || (INPUTS.MIN + INPUTS.STEP)}
                        classNames={{
                            input: classes.select,
                            controlUp: classes.numberUp,
                            controlDown: classes.numberDown,
                            rightSection: classes.selectRightSection
                        }}/>
                    <Button data-elem="search-button" className={classes.submit} onClick={onClickHandler}>Применить</Button>
                </form>
            </Flex>
        </Paper>
    );
};

export default React.memo(Filter);