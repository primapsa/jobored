import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {VacancyResponseType} from "../../api/api";
import {setCurrentVacancy, toggleCurrentVacancyFavorite} from "../../redux/vacancyReducer";
import Description from "../../components/Description/Description";
import {Container} from "@mantine/core";
import ItemSimple from "../../components/Item/ItemSimple";
import {useVacancyStyles} from "./vacancyStyle";
import PageLoader from "../../components/PageLoader/PageLoader";
import AppError from "../../components/AppError/AppError";
import {STATUSES} from "../../const/statuses";

const Vacancy = () => {
    const {classes} = useVacancyStyles()
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => dispatch<AppDispatch>(setCurrentVacancy(Number(id))), [])

    const vacancy = useSelector<AppStateType, VacancyResponseType>(state => state.vacancy.current)
    const status = useSelector<AppStateType, string>(state => state.vacancy.status)
    const favoriteCallback = (id: number, isFavorite: boolean) => dispatch<AppDispatch>(toggleCurrentVacancyFavorite(id, isFavorite))

    return (
        <AppError>
            <PageLoader isActive={status === STATUSES.LOADING}>
                <Container className={classes.wrapper}>
                    {
                        Object.keys(vacancy).length &&
                        <>
                            <ItemSimple id={vacancy.id}
                                        profession={vacancy.profession}
                                        payment_from={vacancy.payment_from}
                                        payment_to={vacancy.payment_to}
                                        type_of_work={vacancy.type_of_work.title}
                                        currency={vacancy.currency}
                                        town={vacancy.town.title}
                                        favorite={vacancy.favorite}
                                        favoriteCallback={favoriteCallback}
                            />
                            <Description text={vacancy.vacancyRichText}/>
                        </>
                    }
                </Container>
            </PageLoader>
        </AppError>
    );
};

export default Vacancy;

