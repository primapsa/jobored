import React, {useEffect} from 'react';
import styles from './../../App.module.css'
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import {jobAPI} from "../../api/api";
const Header = () => {
     return (
       <header className={styles.header}>
            <div className={`${styles.appWrapper} ${styles.headerContainer}`}>
                <Logo/>
                <Menu/>
            </div>
       </header>
    );
};

export default Header;