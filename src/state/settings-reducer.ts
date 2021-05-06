type ActionType =
    ChangeMaxValueActionType
    | ChangeStartValueActionType
    | SetValueActionType
    | IncValueActionType
    | ResetValueActionType

export type ChangeMaxValueActionType = {
    type: 'CHANGE-MAX-VALUE',
    value: number
}
export type ChangeStartValueActionType = {
    type: 'CHANGE-START-VALUE',
    value: number
}
export type SetValueActionType = {
    type: 'SET-VALUE'
}
export type IncValueActionType = {
    type: 'INC-VALUE'
}
export type ResetValueActionType = {
    type: 'RESET-VALUE'
}
export type stateType = {
    count: number,
    maxValue: number,
    startValue: number,
    error: string,
    settingDisabled: boolean
}
const initialState: stateType = {
    count: 0,
    maxValue: 0,
    startValue: 0,
    error: '',
    settingDisabled: false
}

export const settingsReducer = (state: stateType = initialState, action: ActionType): stateType => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE': {
            const stateCopy = {...state};
            stateCopy.maxValue = action.value;
            if (action.value < 1 || action.value <= stateCopy.startValue) {
                stateCopy.error = 'error';
            } else {
                stateCopy.error = '';
            }
            if (action.value >= 1 || action.value > stateCopy.startValue) {
                stateCopy.settingDisabled = false
            }
            return stateCopy;
        }
        case 'CHANGE-START-VALUE': {
            const stateCopy = {...state};
            stateCopy.startValue = action.value;
            if (action.value < 0 || action.value >= stateCopy.maxValue) {
                stateCopy.error = 'Incorrect value';
            } else {
                stateCopy.error = '';
            }

            if (action.value >= 0 || action.value < stateCopy.maxValue) {
                stateCopy.settingDisabled = false
            }
            return stateCopy;
        }
        case 'SET-VALUE': {
            const stateCopy = {...state};
            stateCopy.count = stateCopy.startValue
            stateCopy.settingDisabled = true
            return stateCopy;
        }
        case 'INC-VALUE': {
            const stateCopy = {...state};
            if (typeof stateCopy.count == 'number') {
                stateCopy.count++
            }
            return stateCopy;
        }
        case 'RESET-VALUE': {
            const stateCopy = {...state};
            stateCopy.count = stateCopy.startValue
            return stateCopy;
        }
        default:
            return state
    }
}

export const changeMaxValueAC = (value: number): ChangeMaxValueActionType => {
    return {type: 'CHANGE-MAX-VALUE', value: value}
}
export const changeStartValueAC = (value: number): ChangeStartValueActionType => {
    return {type: 'CHANGE-START-VALUE', value: value}
}
export const setValueAC = (): SetValueActionType => {
    return {type: 'SET-VALUE'}
}
export const incValueAC = (): IncValueActionType => {
    return {type: 'INC-VALUE'}
}
export const resetValueAC = (): ResetValueActionType => {
    return {type: 'RESET-VALUE'}
}