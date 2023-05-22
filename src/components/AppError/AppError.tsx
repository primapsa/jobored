import React from 'react';
import styles from './Error.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {JobStateStatusType} from "../../redux/jobReducer";
import {STATUSES} from "../../const/statuses";

const AppError = ({children}:ErrorPropsType) => {
    const status = useSelector<AppStateType, JobStateStatusType>( state => state.app.status)
    const error = useSelector<AppStateType, string>( state => state.app.errorMsg)

    return (
        <>
            {
                status===STATUSES.ERROR ?
                <div className={styles.container}>
                    <div className={styles.close}></div>
                    <div className={styles.message}>{error}</div>
                </div> : children
            }
        </>
    );
};

export default AppError;

type ErrorPropsType = {
    children: React.ReactNode
}