import {jobAPI, VacancyResponseType} from "../api/api";
import {AppDispatch} from "./store";
import {localStorageAPI} from "../api/localStorageAPI";

const initial: JobStateType = {
    list: [],
    status: 'complete',
    favorites: []
}


export const jobReducer = (state: JobStateType = initial, action: ActionType): JobStateType => {
    switch (action.type) {
        case "ADD-JOBLIST":
            return {...state, list: [...action.payload.list]}
        case "TOGGLE-FAVORITE":
            return {
                ...state, list: state.list
                    .map(e => e.id === action.payload.id ? {...e, favorite: action.payload.isFavorite} : e)
            }
        case "ADD-FAVORITE":
            return {...state, favorites: action.payload.favorite.map(e => ({...e, favorite: true}))}

        default:
            return state
    }
}
const addJobList = (list: VacancyResponseType[]) => ({type: 'ADD-JOBLIST', payload: {list}} as const)
const toggleFavoriteJob = (id: number, isFavorite: boolean) => ({
    type: 'TOGGLE-FAVORITE',
    payload: {id, isFavorite}
} as const)
const addFavorite = (favorite: VacancyResponseType[]) => ({type: 'ADD-FAVORITE', payload: {favorite}} as const)

export const setVacancies = () => (dispatch: AppDispatch) => {
    jobAPI.getVacancies().then(
        response => dispatch(addJobList(response))
    )
}
export const setFavorite = (id: number, isFavorite: boolean) => (dispatch: AppDispatch) => {
    localStorageAPI.set('jobored', id).then(response => dispatch(toggleFavoriteJob(id, isFavorite))
    )
}
export const fetchFavorite = () => (dispatch: AppDispatch) => {
    localStorageAPI.get('jobored')
        .then(response => jobAPI.getVacanciesById(response))
        .then(favorites => dispatch(addFavorite(favorites.objects)))
        .catch(err => console.log(err))
}

type JobStateType = {
    list: VacancyResponseType[]
    status: JobStateStatusType
    favorites: VacancyResponseType[]
}
type JobStateStatusType = 'complete' | 'loading'
type ActionType = AddJobListType | ToggleFavoriteJob | AddFavoriteType;
type AddJobListType = ReturnType<typeof addJobList>
type ToggleFavoriteJob = ReturnType<typeof toggleFavoriteJob>
type AddFavoriteType = ReturnType<typeof addFavorite>