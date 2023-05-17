import React, {useEffect} from 'react';
import styles from '../../App.module.css'
import Filter from "../../components/Filter/Filter";
import InputWithButton from "../../components/InputWithButton/InputWithButton";
import JobList from "../JobList/JobList";
import Pagination from "../../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {fetchVacanciesByQueryString, setVacancies} from "../../redux/jobReducer";
import {DEFAULT_ITEM_PER_PAGE} from "../../api/api";

const Vacancies = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector<AppStateType, number>(state => state.job.page)
    useEffect(() => {
        dispatch<AppDispatch>(fetchVacanciesByQueryString(currentPage))
    }, [])
    const total = useSelector<AppStateType, number>(state => state.job.total)

    const totalPages = Math.ceil(total / DEFAULT_ITEM_PER_PAGE)
    const paginationHandler = (page: number) => {
        dispatch<AppDispatch>(fetchVacanciesByQueryString(page))

    }

    return (
        <div className={styles.jobSearchContainer}>
            <Filter/>
            <div className={styles.jobSearch}>
                <InputWithButton/>
                <JobList/>
                <Pagination onPageCallback={paginationHandler}
                            pageCount={totalPages}
                            pageRange={3}
                            forcePage={currentPage}/>
            </div>
        </div>
    );
};

export default Vacancies;