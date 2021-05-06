import {AppRootState} from "../state/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counterValue')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined
    }
}

export const saveState = (state: AppRootState) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('counterValue', serializedState)
    } catch (e) {
        // error
    }
}