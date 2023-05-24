import React, {useCallback} from 'react';
import Item from "../../components/Item/Item";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {VacancyResponseType} from "../../api/api";

import {setCurrentVacancy} from "../../redux/vacancyReducer";
import {setFavorite} from "../../redux/favoriteReducer";
import {Container} from "@mantine/core";
import Plug from "../../components/Plug/Plug";
import {useJoblistStyles} from "./joblistStyle";

const JobList = () => {
    const {classes} = useJoblistStyles()
    const dispatch = useDispatch();
    const vacancies = useSelector<AppStateType, VacancyResponseType[]>(state => state.job.list)
    const favoriteCallback = useCallback((id: number, isFavorite: boolean) =>
        dispatch<AppDispatch>(setFavorite(id, isFavorite)), [dispatch])

    const list = vacancies
        .map(v => <Item
            key={v.id}
            id={v.id}
            profession={v.profession}
            payment_from={v.payment_from}
            payment_to={v.payment_to}
            type_of_work={v.type_of_work.title}
            currency={v.currency}
            town={v.town.title}
            favorite={v.favorite}
            favoriteCallback={favoriteCallback}/>
        )

    return (
        <Plug isActive={Boolean(list.length)} isButton={false}>
            <Container className={classes.wrapper}>
                {list}
            </Container>
        </Plug>
    );
};

export default React.memo(JobList);