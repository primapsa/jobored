import React from 'react';
import Item from "../../components/Item/Item";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {VacancyResponseType} from "../../api/api";

import {setCurrentVacancy} from "../../redux/vacancyReducer";
import {setFavorite} from "../../redux/favoriteReducer";
import {Container} from "@mantine/core";
import Plug from "../../components/Plug/Plug";

const JobList = () => {
    const dispatch = useDispatch();
    const vacancies = useSelector<AppStateType, VacancyResponseType[]>(state => state.job.list)
    const favoriteCallback = (id: number, isFavorite: boolean) => dispatch<AppDispatch>(setFavorite(id, isFavorite))
    const blankCallback = (id: number) => dispatch<AppDispatch>(setCurrentVacancy(id))
    const list = vacancies.map(v => <Item key={v.id}
                                          id={v.id}
                                          profession={v.profession}
                                          payment_from={v.payment_from}
                                          payment_to={v.payment_to}
                                          type_of_work={v.type_of_work.title}
                                          currency={v.currency}
                                          town={v.town.title}
                                          favorite={v.favorite}
                                          favoriteCallback={favoriteCallback}
                                          blankCallback={blankCallback}
    />)
    return (
       <Plug isActive={Boolean(list.length)} isButton={false}>
           <Container sx={{ padding: 0,margin: 0, display: "flex", flexDirection: "column", flexGrow: 1}}>
               {list}
           </Container>
       </Plug>
    );
};

export default JobList;