import {jobAPI, VacancyResponseType} from "../api/api";
import {AppDispatch, AppStateType} from "./store";
import {localStorageAPI} from "../api/localStorageAPI";
import {makeSearchtQuery} from "../utils/makeInputQuery";
import {STATUSES} from "../const/statuses";
import {addAppStatus} from "./appReducer";
import {PAGE} from "../const/page";


const initial: JobStateType = {
    list: [],
    status: 'idle',
    page: 0,
    total: 0
}
export const jobReducer = (state: JobStateType = initial, action: ActionType): JobStateType => {
    switch (action.type) {
        case "ADD-VACANCIES":
            return {
                ...state,
                list: action.payload.list
                    .map(v => action.payload.favorites.includes(v.id) ? {...v, favorite: true } : v),
                total: action.payload.total
            }
        case "TOGGLE-FAVORITE-STATUS":
            return {
                ...state, list: state.list
                    .map(e => e.id === action.payload.id ? {...e, favorite: action.payload.isFavorite} : e)
            }
        case "ADD-CURRENT-PAGE":
            return {...state, page: action.payload.page}
        case "ADD-PAGE-STATUS":
            return {...state, status: action.payload.status}
        default:
            return state
    }
}

const addVacancies = (vacancies: VacancyResponseType[], total: number, favorites: number[]) => ({
    type: 'ADD-VACANCIES',
    payload: {list: vacancies, total, favorites}
} as const)

const addPageStatus = (status: JobStateStatusType) => ({type: 'ADD-PAGE-STATUS', payload: {status}} as const)
export const toggleFavoriteJob = (id: number, isFavorite: boolean) => ({
    type: 'TOGGLE-FAVORITE-STATUS',
    payload: {id, isFavorite}
} as const)

const addCurrentPage = (page: number) => ({type: 'ADD-CURRENT-PAGE', payload: {page}} as const)

export const fetchVacanciesByQueryString = (page: number = PAGE.NUMBER, count: number = PAGE.ITEM) =>
    (dispatch: AppDispatch, getState: () => AppStateType) => {
        const state = getState();
        dispatch(addPageStatus(STATUSES.LOADING))
        const query = makeSearchtQuery(state.searchInput.query, state.filter.fields) + `&page=${page}&count=${count}`
        jobAPI.getVacanciesByQueryString(query)
            .then(response => {
                const total = response.total > PAGE.MAX ? PAGE.MAX : response.total
                dispatch(addCurrentPage(page))
                return localStorageAPI.get("jobored")
                    .then(favorites => ({favorites, vacancies: response.objects, total}))
            })
            .then(response => {
                    dispatch(addVacancies(response.vacancies, response.total, response.favorites))
                    dispatch(addPageStatus(STATUSES.IDLE))
                }
            ).catch(err => dispatch(addAppStatus(STATUSES.ERROR, err.message)))
    }

type JobStateType = {
    list: VacancyResponseType[]
    status: JobStateStatusType
    page: number
    total: number
}
export type JobStateStatusType = 'loading' | 'idle' | 'error'
type ActionType = AddJobListType | ToggleFavoriteJob | AddCurrentPageType | AddPageStatusType;
type AddJobListType = ReturnType<typeof addVacancies>
type AddPageStatusType = ReturnType<typeof addPageStatus>
type ToggleFavoriteJob = ReturnType<typeof toggleFavoriteJob>
type AddCurrentPageType = ReturnType<typeof addCurrentPage>