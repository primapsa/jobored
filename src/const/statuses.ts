import {JobStateStatusType} from "../redux/jobReducer";

export const STATUSES: StatusesType = {
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle'
}
type StatusesType = {
    LOADING: JobStateStatusType
    ERROR: JobStateStatusType
    IDLE: JobStateStatusType
}