import React from 'react';
import styles from '../../App.module.css'
import JobSearch from "../JobSearch/JobSearch";
const Main = () => {
    return (
        <main className={styles.main}>
            <JobSearch/>
        </main>
    );
};

export default Main;