import {jobAPI, VacancyResponseType} from "../api/api";
import {AppDispatch} from "./store";
import {setFavorite} from "./favoriteReducer";
import {JobStateStatusType} from "./jobReducer";
import {STATUSES} from "../const/statuses";
import {addAppStatus} from "./appReducer";
import {localStorageAPI} from "../api/localStorageAPI";

const initial: VacancyStateType = {
    current: {} as VacancyResponseType,
    status: 'idle'
}

export const vacancyReducer = (state: VacancyStateType = initial, action: ActionType): VacancyStateType => {
    switch (action.type) {
        case "ADD-CURRENT-VACANCY":
            return {
                ...state,
                current: {
                    ...action.payload.vacancy,
                    favorite: action.payload.favorites.includes(action.payload.vacancy.id)
                }
            }
        case "ADD-VACANCY-STATUS":
            return {...state, status: action.payload.status}
        case "TOGGLE-VACANCY-FAVORITE":
            return {...state, current: {...state.current, favorite: !state.current.favorite}}
        default:
            return state
    }
}

const addCurrentVacancy = (vacancy: VacancyResponseType, favorites: number[]) => ({
    type: 'ADD-CURRENT-VACANCY',
    payload: {vacancy, favorites}
} as const)
const addVacancyStatus = (status: JobStateStatusType) => ({type: 'ADD-VACANCY-STATUS', payload: {status}} as const)
const toggleVacancyFavorite = () => ({type: 'TOGGLE-VACANCY-FAVORITE'} as const)

export const setCurrentVacancy = (id: number) => (dispatch: AppDispatch) => {
    dispatch(addVacancyStatus(STATUSES.LOADING))
    localStorageAPI.get("jobored")
        .then(favorites => jobAPI.getVacanciesById([id]).then(vacancies => ({vacancies, favorites})))
        .then(response => {
            dispatch(addCurrentVacancy(response.vacancies[0], response.favorites))
            dispatch(addVacancyStatus(STATUSES.IDLE))
        })
        .catch(err => dispatch(addAppStatus(STATUSES.ERROR, err.message)))
}

export const toggleCurrentVacancyFavorite = (id: number, isFavorite: boolean) => (dispatch: AppDispatch) => {
    dispatch(setFavorite(id, isFavorite))
    dispatch(toggleVacancyFavorite())
}

type VacancyStateType = {
    current: VacancyResponseType
    status: JobStateStatusType
}
type ActionType = AddCurrentVacancyType | AddVacancyStatusType | ToggleVacancyType;
type AddCurrentVacancyType = ReturnType<typeof addCurrentVacancy>
type AddVacancyStatusType = ReturnType<typeof addVacancyStatus>
type ToggleVacancyType = ReturnType<typeof toggleVacancyFavorite>
