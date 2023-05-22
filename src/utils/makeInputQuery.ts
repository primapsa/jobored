import {FilterFieldsType, FilterStateType} from "../redux/filterReducer";

export const makeSearchtQuery = (keyword: string | undefined, filter: FilterFieldsType): string => {
    let queryParams = [];
    queryParams = (keyword) ? [`keyword=${encodeURIComponent(keyword)}`] : []
    queryParams = filter.currentCatalog ? [...queryParams, `catalogues=${filter.currentCatalog}`] : queryParams
    queryParams = filter.paymentFrom ? [...queryParams, `payment_from=${filter.paymentFrom}`] : queryParams
    queryParams = filter.paymentTo ? [...queryParams, `payment_to=${filter.paymentTo}`] : queryParams
    queryParams = [...queryParams, `published=1`, `no_agreement=1`]
    return `?${queryParams.join('&')}`
}