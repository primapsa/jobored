import React from 'react';
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import {PAGINATION} from "../../utils/pagination";

const Pagination = ({pageCount, pageRange, onPageCallback, forcePage}: PaginationPropsType) => {

    const onPageChangeHandler = (page:PaginationOnPageType) => onPageCallback(page.selected)
    const isVisible = PAGINATION.MIN_PAGE_COUNT <= pageCount

    return (<>
            {isVisible &&
                <ReactPaginate pageCount={pageCount}
                               onPageChange={onPageChangeHandler}
                               forcePage={forcePage}
                               pageRangeDisplayed={pageRange}
                               marginPagesDisplayed={PAGINATION.MARGIN_PAGES}
                               breakLabel={PAGINATION.BREAK_LABEL}
                               previousLabel={PAGINATION.PREVIOUS}
                               nextLabel={PAGINATION.NEXT}
                               containerClassName={'pagination'}
                               activeLinkClassName={'active'}
                               disabledClassName={'disabled-page'}
                               pageLinkClassName={'item'}
                               previousClassName={"item"}
                               nextLinkClassName={"item"}
                />
            }
        </>
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