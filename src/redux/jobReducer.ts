const initial: JobStateType = {
    list: [],
    status: 'complete'
}

const addJobList = (list: any[]) => ({type: 'ADD-JOBLIST', payload: {list}} as const)


export const jobReducer = (state: JobStateType = initial, action: ActionType): JobStateType => {
    switch (action.type) {
        case "ADD-JOBLIST":
            return {...state, list: [...action.payload.list]}
        default:
            return state
    }
}
export const
type JobStateType = {
    list: any[]
    status: JobStateStatusType
}
type JobStateStatusType = 'complete' | 'loading'
type ActionType = addJobListType;
type addJobListType = ReturnType<typeof addJobList>