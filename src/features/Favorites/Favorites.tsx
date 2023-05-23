import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {VacancyResponseType} from "../../api/api";

import Item from "../../components/Item/Item";
import Pagination from "../../components/Pagination/Pagination";
import {Container} from "@mantine/core";
import {addPageFavorite, addPageStatus, fetchFavorite, updateFavorite} from "../../redux/favoriteReducer";
import Plug from "../../components/Plug/Plug";
import {useFavoritesStyles} from "./favoriteStyle";
import {JobStateStatusType} from "../../redux/jobReducer";
import PageLoader from '../../components/PageLoader/PageLoader';
import AppError from "../../components/AppError/AppError";
import {STATUSES} from "../../const/statuses";
import {PAGE} from "../../const/page";

const Favorites = () => {

    const dispatch = useDispatch();
    const {classes} = useFavoritesStyles()
    const currentPage = useSelector<AppStateType, number>(state => state.favorite.page)
    const total = useSelector<AppStateType, number>(state => state.favorite.total)

    useEffect(() => {
        dispatch(addPageStatus(STATUSES.LOADING))
        dispatch<AppDispatch>(fetchFavorite(currentPage))
    }, [currentPage])

    const favorites = useSelector<AppStateType, VacancyResponseType[]>(state => state.favorite.vacancies)
    const status = useSelector<AppStateType, JobStateStatusType>(state => state.favorite.status)
    const pages = Math.ceil(total / PAGE.ITEM)
    const onPaginatePageHandle = (page: number) => dispatch<AppDispatch>(addPageFavorite(page))
    const favoriteCallBackHandler = (id: number, isFavorite: boolean) => dispatch<AppDispatch>(updateFavorite(id, isFavorite))
    const list = favorites
        .map(v => <Item key={v.id}
                        id={v.id}
                        profession={v.profession}
                        payment_from={v.payment_from}
                        payment_to={v.payment_to}
                        type_of_work={v.type_of_work.title}
                        currency={v.currency}
                        town={v.town.title}
                        favorite={v.favorite}
                        favoriteCallback={favoriteCallBackHandler}
                        blankCallback={() => {
                        }}
            />
        )

    return (
        <AppError>
            <PageLoader isActive={status === STATUSES.LOADING}>
                <Plug isActive={Boolean(total)}>
                    <Container className={classes.wrapper}>
                        {list}
                        <div className={classes.pagination}>
                            <Pagination pageCount={pages} pageRange={PAGE.RANGE}
                                        onPageCallback={onPaginatePageHandle}
                                        forcePage={currentPage}/>
                        </div>
                    </Container>
                </Plug>
            </PageLoader>
        </AppError>
    );
}

export default Favorites;
