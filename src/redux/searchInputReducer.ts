
const initial: searchInputStateType = {
    query: 'a',
    status: []

}
export const searchInputReducer = (state: searchInputStateType = initial, action: ActionType) => {


    switch(action.type){
        case "ADD-SEARCH-QUERY":
            return {...state, query: action.payload.query}
        default:
            return state
    }
}
export const addSearchRequest = (query: string) => ({type: 'ADD-SEARCH-QUERY', payload:{query}} as const)
type searchInputStateType = {
    query: string
    status: number[]
}
type ActionType = addSearchRequestType
type addSearchRequestType = ReturnType<typeof addSearchRequest>