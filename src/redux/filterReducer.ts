import {CataloguesType, jobAPI} from "../api/api";
import {AppDispatch, AppStateType} from "./store";
import {fetchVacanciesByQueryString, JobStateStatusType} from "./jobReducer";
import {STATUSES} from "../const/statuses";
import {addAppStatus} from "./appReducer";
import {clearSearchRequest} from "./searchInputReducer";

const initial: FilterStateType = {
    fields: {
        catalogues: [],
        paymentFrom: undefined,
        paymentTo: undefined,
        currentCatalog: null,
    },
    status: 'idle'
}

export const filterReducer = (state: FilterStateType = initial, action: ActionType): FilterStateType => {
    switch (action.type) {
        case "ADD-CATALOGUES":
            return {...state, fields: {...state.fields, catalogues: action.payload.catalogues}}
        case "ADD-STATUS":
            return {...state, status: action.payload.status}
        case "ADD-CURRENT-CATALOG":
            return {...state, fields: {...state.fields, currentCatalog: action.payload.id}}
        case "ADD-PAYMENT-FROM":
            return {...state, fields: {...state.fields, paymentFrom: action.payload.value}}
        case "ADD-PAYMENT-TO":
            return {...state, fields: {...state.fields, paymentTo: action.payload.value}}
        case "RESET-FILTER":
            return {
                ...state,
                fields: {...state.fields, currentCatalog: null, paymentFrom: undefined, paymentTo: undefined}
            }
        default:
            return state
    }
}

const addCatalogues = (catalogues: CataloguesType[]) => ({type: 'ADD-CATALOGUES', payload: {catalogues}} as const)
const addStatus = (status: JobStateStatusType) => ({type: 'ADD-STATUS', payload: {status}} as const)
export const addCurrentCatalog = (id: string | null) => ({type: 'ADD-CURRENT-CATALOG', payload: {id}} as const)
export const addPaymentFromValue = (value: PaymentType) => ({type: 'ADD-PAYMENT-FROM', payload: {value}} as const)
export const addPaymentToValue = (value: PaymentType) => ({type: 'ADD-PAYMENT-TO', payload: {value}} as const)
export const resetFilter = () => ({type: 'RESET-FILTER'} as const)

export const clearSearchQueries = () => (dispatch: AppDispatch) => {
    dispatch(resetFilter())
    dispatch(clearSearchRequest())
    dispatch(fetchVacanciesByQueryString())
}

export const fetchActualCatalogues = () => (dispatch: AppDispatch, getState: () => AppStateType) => {
    const state = getState();
    if (!state.filter.fields.catalogues.length) {
        dispatch(fetchCatalogues())
    }
}
export const fetchCatalogues = () => (dispatch: AppDispatch) => {
    dispatch(addStatus(STATUSES.LOADING))
    jobAPI.getCatalogues()
        .then(catalogues => {
            dispatch(addCatalogues(catalogues))
            dispatch(addStatus(STATUSES.IDLE))
        })
        .catch(err => dispatch(addAppStatus(STATUSES.ERROR, err.message)))
}

type ActionType =
    AddCatalogType
    | AddStatusType
    | AddCurrentCatalogType
    | AddPaymentFromValueType
    | AddPaymentToValueType
    | ResetFilterType

type AddCatalogType = ReturnType<typeof addCatalogues>
type AddStatusType = ReturnType<typeof addStatus>
type AddCurrentCatalogType = ReturnType<typeof addCurrentCatalog>
type AddPaymentFromValueType = ReturnType<typeof addPaymentFromValue>
type AddPaymentToValueType = ReturnType<typeof addPaymentToValue>
export type PaymentType = number | '' | undefined
type ResetFilterType = ReturnType<typeof resetFilter>
export type FilterFieldsType = {
    catalogues: CataloguesType[]
    paymentFrom: PaymentType
    paymentTo: PaymentType
    currentCatalog: string | null
}
export type FilterStateType = {
    fields: FilterFieldsType
    status: JobStateStatusType
}