import {applyMiddleware, combineReducers, createStore} from "redux";
import {settingsReducer} from "./settings-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/utils";


export const rootReducer = combineReducers({
    settings: settingsReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));


store.subscribe(() => {
        saveState({
            settings: store.getState().settings
        })
    }
)

// @ts-ignore
window.store = store;