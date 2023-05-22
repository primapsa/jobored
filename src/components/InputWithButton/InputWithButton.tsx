import {Button, TextInput} from '@mantine/core';
import {IconSearch} from '@tabler/icons-react';
import {fetchVacanciesByQueryString} from "../../redux/jobReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {addSearchRequest} from "../../redux/searchInputReducer";
import {ChangeEvent} from "react";
import {useInputsStyles} from "./inputStyle";

function InputWithButton() {

    const {classes} = useInputsStyles()
    const dispatch = useDispatch()
    const inputValue = useSelector<AppStateType, string>(state => state.searchInput.query)
    const onClickHandler = () => dispatch<AppDispatch>(fetchVacanciesByQueryString())
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch<AppDispatch>(addSearchRequest(e.target.value))

    return (

        <TextInput
            data-elem="search-input"
            icon={<IconSearch size="1.1rem" stroke={1.5}/>}
            size="md"
            rightSection={
                <Button data-elem="search-button" className={classes.button} onClick={onClickHandler}>{'Поиск'}</Button>
            }
            placeholder="Введите название вакансии"
            rightSectionWidth={42}
            value={inputValue}
            onChange={onChangeHandler}
            classNames={{
                input: classes.input,
                rightSection: classes.rightSection
            }}
        />
    );
}

export default InputWithButton