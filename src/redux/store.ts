import {applyMiddleware, combineReducers, createStore} from "redux";
import {jobReducer} from "./jobReducer";
import thunk from "redux-thunk";
import {vacancyReducer} from "./vacancyReducer";
import {searchInputReducer} from "./searchInputReducer";
import {filterReducer} from "./filterReducer";
import {favoriteReducer} from "./favoriteReducer";
import {appReducer} from "./appReducer";


const rootReducer = combineReducers(
    {
        app: appReducer,
        job: jobReducer,
        vacancy: vacancyReducer,
        searchInput: searchInputReducer,
        filter: filterReducer,
        favorite: favoriteReducer
    }
)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch | any
// @ts-ignore
window.store = store;