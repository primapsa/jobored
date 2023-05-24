import React, {useCallback, useEffect} from 'react';
import Filter from "../../components/Filter/Filter";
import InputWithButton from "../../components/InputWithButton/InputWithButton";
import JobList from "../JobList/JobList";
import Pagination from "../../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {fetchVacanciesByQueryString, JobStateStatusType} from "../../redux/jobReducer";
import {Container} from "@mantine/core";
import {useVacanciesStyles} from "./VacanciesStyle";
import PageLoader from "../../components/PageLoader/PageLoader";
import AppError from "../../components/AppError/AppError";
import {STATUSES} from "../../const/statuses";
import {PAGE} from "../../const/page";

const Vacancies = () => {

    const {classes} = useVacanciesStyles()
    const dispatch = useDispatch()
    const currentPage = useSelector<AppStateType, number>(state => state.job.page)
    const status = useSelector<AppStateType, JobStateStatusType>(state => state.job.status)
    useEffect(() => dispatch<AppDispatch>(fetchVacanciesByQueryString(currentPage)), [])
    const total = useSelector<AppStateType, number>(state => state.job.total)

    const paginationHandler = useCallback((page: number) =>
        dispatch<AppDispatch>(fetchVacanciesByQueryString(page)),[dispatch])

    const totalPages = Math.ceil(total / PAGE.ITEM)

    return (
        <AppError>
            <Container className={classes.vacancyWrapper}>
                <Filter/>
                <PageLoader isActive={status === STATUSES.LOADING}>
                    <Container className={classes.jobContainer}>
                        <InputWithButton/>
                        <JobList/>
                        <Pagination onPageCallback={paginationHandler}
                                    pageCount={totalPages}
                                    pageRange={PAGE.RANGE}
                                    forcePage={currentPage}/>
                    </Container>
                </PageLoader>
            </Container>
        </AppError>
    );
};

export default React.memo(Vacancies);