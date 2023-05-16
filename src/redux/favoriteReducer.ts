import {jobAPI, VacancyResponseType} from "../api/api";
import {AppDispatch} from "./store";
import {localStorageAPI} from "../api/localStorageAPI";
import {toggleFavoriteJob} from "./jobReducer";

const initial: FavoriteStateType = {
    vacancies: [],
    status: '',
    page: 0
}

export const favoriteReducer = (state: FavoriteStateType = initial, action: ActionType): FavoriteStateType => {
    switch (action.type) {
        case "ADD-FAVORITE-VACANCY":
            return {...state, vacancies: [...state.vacancies, action.payload.vacancy]}
        case "REMOVE-FAVORITE-VACANCY":
            return {...state, vacancies: state.vacancies.filter(v => v.id !== action.payload.id)}
        case "ADD-PAGE-VACANCY":
            return {...state, page: action.payload.page}
        case "ADD-FAVORITE-VACANCIES":
            return {...state, vacancies: [...action.payload.vacancies]}
        default:
            return state
    }
}

const addFavorite = (vacancy: VacancyResponseType) => ({type: 'ADD-FAVORITE-VACANCY', payload: {vacancy}} as const)
const addFavorites = (vacancies: VacancyResponseType[]) => ({
    type: 'ADD-FAVORITE-VACANCIES',
    payload: {vacancies}
} as const)
const removeFavorite = (id: number) => ({type: 'REMOVE-FAVORITE-VACANCY', payload: {id}} as const)
const addPage = (page: number) => ({type: 'ADD-PAGE-VACANCY', payload: {page}} as const)

export const setFavorite = (vacancy: VacancyResponseType, isFavorite: boolean) => (dispatch: AppDispatch) => {
    localStorageAPI.set('jobored', vacancy.id).then(response => {
            dispatch(toggleFavoriteJob(vacancy.id, isFavorite))
            dispatch(addFavorite(vacancy))
    }
    )
}

export const fetchFavorite = () => (dispatch: AppDispatch) => {
    localStorageAPI.get('jobored')
        .then(response => jobAPI.getVacanciesById(response))
        .then(favorites => dispatch(addFavorites(favorites.objects)))
        .catch(err => console.log(err))
}


type FavoriteStateType = {
    vacancies: VacancyResponseType[]
    status: string
    page: number
}
type ActionType = AddFavoriteType | RemoveFavoriteType | AddPageType | AddFavoritesType
type AddFavoriteType = ReturnType<typeof addFavorite>
type AddFavoritesType = ReturnType<typeof addFavorites>
type RemoveFavoriteType = ReturnType<typeof removeFavorite>
type AddPageType = ReturnType<typeof addPage>