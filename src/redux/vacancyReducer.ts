import {jobAPI, VacancyResponseType} from "../api/api";
import {AppDispatch, AppStateType} from "./store";

const initial = {
    current: {},
    status: 'complete'
}

const addCurrentVacancy = (vacancy: VacancyResponseType) => ({type: 'ADD-CURRENT-VACANCY', payload: {vacancy}} as const)
const addVacancyStatus = (status: string) => ({type: 'ADD-VACANCY-STATUS', payload: {status}} as const)

export const vacancyReducer = (state: VacancyStateType = initial as VacancyStateType, action: ActionType): VacancyStateType => {

    switch (action.type) {
        case "ADD-CURRENT-VACANCY":
            return {...state, current: action.payload.vacancy}
        case "ADD-VACANCY-STATUS":
            return {...state, status: action.payload.status}
        default:
            return state
    }
}

export const setCurrentVacancy = (id: number) => (dispatch: AppDispatch, getState: () => AppStateType) => {
    const vacancy = getState().job.list.find((v) => v.id === id)
    if (!vacancy) {
        jobAPI.getVacanciesById([id])
            .then(response => {
                if (response.total > 0) {
                    dispatch(addCurrentVacancy(response.objects[0]))
                } else {
                    dispatch(addVacancyStatus('error'))
                }
            })
            .catch(err => dispatch(addVacancyStatus('error')))
    } else {
        dispatch(addCurrentVacancy(vacancy))
    }
}

type VacancyStateType = {
    current: VacancyResponseType
    status: string
}
type ActionType = AddCurrentVacancyType | AddVacancyStatusType;
type AddCurrentVacancyType = ReturnType<typeof addCurrentVacancy>
type AddVacancyStatusType = ReturnType<typeof addVacancyStatus>
