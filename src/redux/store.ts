import {applyMiddleware, combineReducers, createStore} from "redux";
import {jobReducer} from "./jobReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers(
    {
        job: jobReducer
    }
)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>