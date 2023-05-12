import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {VacancyResponseType} from "../../api/api";
import {setCurrentVacancy} from "../../redux/vacancyReducer";
import Item from "../../components/Item/Item";
import Description from "../../components/Description/Description";

const Vacancy = () => {
    let {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch<AppDispatch>(setCurrentVacancy(Number(id)))
    },[id])

    const vacancy = useSelector<AppStateType, VacancyResponseType>(state => state.vacancy.current)
    const status = useSelector<AppStateType, string>(state => state.vacancy.status)
    return (
        <div>
            {status === 'error' && 'ERROR'}
            <Description text={vacancy.vacancyRichText}/>
        </div>
    );
};

export default Vacancy;