import React from 'react';
import ReactPaginate from "react-paginate";
import {PAGINATION} from "../../utils/pagination";
import styles from "./Pagination.module.css"

import {IconChevronRight,IconChevronLeft} from '@tabler/icons-react';
const Pagination = ({pageCount, pageRange, onPageCallback, forcePage}: PaginationPropsType) => {

    const onPageChangeHandler = (page:PaginationOnPageType) => onPageCallback(page.selected)
    const isVisible = PAGINATION.MIN_PAGE_COUNT <= pageCount

    return (<div className={styles.container}>
            {isVisible &&
                <ReactPaginate pageCount={pageCount}
                               onPageChange={onPageChangeHandler}
                               forcePage={forcePage}
                               pageRangeDisplayed={pageRange}
                               marginPagesDisplayed={PAGINATION.MARGIN_PAGES}
                               breakLabel={PAGINATION.BREAK_LABEL}
                               previousLabel={<IconChevronLeft height={15} color={'#7B7C88'}/>}
                               nextLabel={<IconChevronRight height={15} color={'#7B7C88'}/>}
                               containerClassName={styles.pagination}
                               activeLinkClassName={styles.active}
                               disabledClassName={styles.disabled}
                               pageLinkClassName={styles.item}
                               previousClassName={`${styles.item} ${styles.itemPrev}`}
                               nextLinkClassName={`${styles.item} ${styles.itemNext}`}
                />
            }
        </div>
    );
};

export default Pagination;

type PaginationPropsType = {
    pageCount: number
    pageRange: number
    onPageCallback: (p: number) => void
    forcePage: number
}
export type PaginationOnPageType = {
    selected: number
}