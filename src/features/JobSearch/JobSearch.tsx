import React from 'react';
import styles from '../../App.module.css'
import Filter from "../../components/Filter/Filter";
import SearchField from "../../components/SearchField/SearchField";
import JobList from "../JobList/JobList";
import Pagination from "../../components/Pagination/Pagination";
import Favorites from "../Favorites/Favorites";
const JobSearch = () => {
    return (
        <div className={styles.jobSearchContainer}>
            <Filter/>
            <div className={styles.jobSearch}>
                <SearchField/>
                <JobList/>
                {/*<Favorites/>*/}
                <Pagination/>
            </div>
        </div>
    );
};

export default JobSearch;