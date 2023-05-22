import {JobStateStatusType} from "./jobReducer";

const initial: AppReducerStateType = {
    status: 'idle',
    errorMsg: ''
}

export const appReducer = (state: AppReducerStateType = initial, action: ActionType) => {
    switch (action.type) {
        case "ADD-APP-STATUS":
            return {status: action.payload.status, errorMsg: action.payload.message}
        case "ADD-APP-ERROR-MSG":
            return {...state, errorMsg: action.payload.message}
        default:
            return state
    }
}

export const addAppStatus = (status: JobStateStatusType, message: string) => ({
    type: 'ADD-APP-STATUS',
    payload: {status, message}
} as const)
const addMessage = (message: string) => ({type: 'ADD-APP-ERROR-MSG', payload: {message}} as const)

type AddStatusType = ReturnType<typeof addAppStatus>
type AddErrorMsgType = ReturnType<typeof addMessage>
type ActionType = AddStatusType | AddErrorMsgType

type AppReducerStateType = {
    status: JobStateStatusType
    errorMsg: string
}
