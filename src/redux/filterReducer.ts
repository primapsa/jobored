import {CataloguesType, jobAPI} from "../api/api";
import {AppDispatch} from "./store";

const initial = {
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
            return {...state, fields: {...state.fields, currentCatalog: null, paymentFrom: undefined, paymentTo: undefined}}
        default:
            return state
    }
}
const addCatalogues = (catalogues: CataloguesType[]) => ({type: 'ADD-CATALOGUES', payload: {catalogues}} as const)
const addStatus = (status: string) => ({type: 'ADD-STATUS', payload: {status}} as const)
export const addCurrentCatalog = (id: string | null) => ({type: 'ADD-CURRENT-CATALOG', payload: {id}} as const)
export const addPaymentFromValue = (value: PaymentType) => ({type: 'ADD-PAYMENT-FROM', payload: {value}} as const)
export const addPaymentToValue = (value: PaymentType) => ({type: 'ADD-PAYMENT-TO', payload: {value}} as const)
export const resetFilter = () => ({type: 'RESET-FILTER'} as const)

export const fetchCatalogues = () => (dispatch: AppDispatch) => {
    jobAPI.getCatalogues().then(catalogues => dispatch(addCatalogues(catalogues)))
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
type FilterStateType = {
    fields: {
        catalogues: CataloguesType[]
        paymentFrom: PaymentType
        paymentTo: PaymentType
        currentCatalog: string | null
    }
    status: string
}