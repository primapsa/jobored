import {jobAPI, VacancyResponseType} from "../api/api";
import {AppDispatch, AppStateType} from "./store";
import {localStorageAPI} from "../api/localStorageAPI";
import {JobStateStatusType, toggleFavoriteJob} from "./jobReducer";
import {STATUSES} from "../const/statuses";
import {addAppStatus} from "./appReducer";
import {PAGE} from "../const/page";

const initial: FavoriteStateType = {
    vacancies: [],
    status: 'idle',
    page: 0,
    total: 0
}

export const favoriteReducer = (state: FavoriteStateType = initial, action: ActionType): FavoriteStateType => {
    switch (action.type) {
        case "ADD-FAVORITE-VACANCY":
            return {...state, vacancies: [...state.vacancies, action.payload.vacancy]}
        case "REMOVE-FAVORITE-VACANCY":
            return {...state, vacancies: state.vacancies.filter(v => v.id !== action.payload.id)}
        case "ADD-PAGE-FAVORITE":
            return {...state, page: action.payload.page}
        case "ADD-FAVORITE-VACANCIES":
            return {...state, vacancies: action.payload.vacancies.map(v => ({...v, favorite: true}))}
        case "ADD-TOTAL-FAVORITE":
            return {...state, total: action.payload.total}
        case "ADD-FAVORITE-STATUS":
            return {...state, status: action.payload.status}
        default:
            return state
    }
}

const addFavorite = (vacancy: VacancyResponseType) => ({type: 'ADD-FAVORITE-VACANCY', payload: {vacancy}} as const)
export const addPageStatus = (status: JobStateStatusType) => ({type: 'ADD-FAVORITE-STATUS', payload: {status}} as const)
const toggleFavoriteVacancy = (id: number) => ({type: 'TOGGLE-FAVORITE-VACANCY', payload: {id}} as const)
const addFavorites = (vacancies: VacancyResponseType[]) => ({
    type: 'ADD-FAVORITE-VACANCIES',
    payload: {vacancies}
} as const)
const removeFavorite = (id: number) => ({type: 'REMOVE-FAVORITE-VACANCY', payload: {id}} as const)
export const addPageFavorite = (page: number) => ({type: 'ADD-PAGE-FAVORITE', payload: {page}} as const)
const addTotalFavorites = (total: number) => ({type: 'ADD-TOTAL-FAVORITE', payload: {total}} as const)

export const setFavorite = (id: number, isFavorite: boolean) => (dispatch: AppDispatch, getState: () => AppStateType) => {
    const activePage = getState().favorite.page
    localStorageAPI.set('jobored', id).then(response => {
            const total = response.length
            const pages = Math.ceil(total / PAGE.ITEM)
            if (activePage >= pages) {
                dispatch(addPageFavorite(pages - 1 || PAGE.NUMBER))
            }
            dispatch(toggleFavoriteJob(id, isFavorite))
            dispatch(addTotalFavorites(total))
        }
    ).catch(err => dispatch(addAppStatus(STATUSES.ERROR, err.message)))
}

export const fetchFavorite = (page?: number, count?: number) => (dispatch: AppDispatch) => {
    dispatch(addPageStatus(STATUSES.LOADING))
    localStorageAPI.get('jobored')
        .then(favorites => jobAPI.getVacanciesById(favorites, page, count)
            .then(vacancies => ({vacancies, favorites})))
        .then(
            response => {
                dispatch(addFavorites(response.vacancies))
                dispatch(addTotalFavorites(response.favorites.length))
                dispatch(addPageStatus(STATUSES.IDLE))
            }
        )
        .catch(err => dispatch(addAppStatus(STATUSES.ERROR, err.message)))
}

export const updateFavorite = (id: number, isFavorite: boolean) => (dispatch: AppDispatch, getState: () => AppStateType) => {
    const state = getState();
    dispatch(setFavorite(id, isFavorite))
    dispatch(fetchFavorite(state.favorite.page))
}
type FavoriteStateType = {
    vacancies: VacancyResponseType[]
    status: JobStateStatusType
    page: number
    total: number
}
type ActionType =
    AddFavoriteType
    | RemoveFavoriteType
    | AddPageType
    | AddFavoritesType
    | ToggleFavoriteVacancyType
    | AddTotalFavoritesType
    | AddPageStatusType

type AddFavoriteType = ReturnType<typeof addFavorite>
type AddPageStatusType = ReturnType<typeof addPageStatus>
type AddFavoritesType = ReturnType<typeof addFavorites>
type RemoveFavoriteType = ReturnType<typeof removeFavorite>
type ToggleFavoriteVacancyType = ReturnType<typeof toggleFavoriteVacancy>
type AddTotalFavoritesType = ReturnType<typeof addTotalFavorites>
type AddPageType = ReturnType<typeof addPageFavorite>