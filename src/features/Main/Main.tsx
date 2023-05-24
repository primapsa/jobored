import React from 'react';
import styles from '../../App.module.css'
import Vacancies from "../Vacancies/Vacancies";
const Main = () => {
    return (
        <main className={styles.main}>
            <Vacancies/>
        </main>
    );
};

export default React.memo(Main);