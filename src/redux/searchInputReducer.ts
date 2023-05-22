import {JobStateStatusType} from "./jobReducer";

const initial: searchInputStateType = {
    query: '',
    status: 'idle'
}

export const searchInputReducer = (state: searchInputStateType = initial, action: ActionType) => {
    switch(action.type){
        case "ADD-SEARCH-QUERY":
            return {...state, query: action.payload.query}
        case "CLEAR-SEARCH-QUERY":
            return {...state, query: ''}
        default:
            return state
    }
}

export const addSearchRequest = (query: string) => ({type: 'ADD-SEARCH-QUERY', payload:{query}} as const)
export const clearSearchRequest = () => ({type: 'CLEAR-SEARCH-QUERY'} as const)
type searchInputStateType = {
    query: string
    status: JobStateStatusType
}
type ActionType = AddSearchRequestType | ClearSearchRequestType
type AddSearchRequestType = ReturnType<typeof addSearchRequest>
type ClearSearchRequestType = ReturnType<typeof clearSearchRequest>