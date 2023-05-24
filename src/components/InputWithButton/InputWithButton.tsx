import React, {useCallback} from 'react';
import {Button, TextInput} from '@mantine/core';
import {fetchVacanciesByQueryString} from "../../redux/jobReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {addSearchRequest} from "../../redux/searchInputReducer";
import {ChangeEvent} from "react";
import {useInputsStyles} from "./inputStyle";
import SearchIcon from "../SearchIcon/SearchIcon";

function InputWithButton() {

    const {classes} = useInputsStyles()
    const dispatch = useDispatch()
    const inputValue = useSelector<AppStateType, string>(state => state.searchInput.query)
    const onClickHandler = useCallback(() => dispatch<AppDispatch>(fetchVacanciesByQueryString()),[dispatch])
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) =>
        dispatch<AppDispatch>(addSearchRequest(e.target.value)),[dispatch])

    return (

        <TextInput
            data-elem="search-input"
            icon={<SearchIcon/>}
            size="md"
            rightSection={
                <Button
                    data-elem="search-button"
                    className={classes.button}
                    onClick={onClickHandler}>
                    {'Поиск'}
                </Button>
            }
            placeholder="Введите название вакансии"
            value={inputValue}
            onChange={onChangeHandler}
            classNames={{
                input: classes.input,
                rightSection: classes.rightSection
            }}
        />
    );
}

export default React.memo(InputWithButton)