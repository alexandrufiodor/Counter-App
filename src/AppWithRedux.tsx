import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    changeMaxValueAC,
    changeStartValueAC,
    incValueAC,
    resetValueAC,
    setValueAC,
    stateType
} from "./state/settings-reducer";
import {AppRootState} from "./state/store";

function AppWithRedux() {

    const dispatch = useDispatch();
    const setting = useSelector<AppRootState, stateType>(state => state.settings)
    //
    // useEffect(() => {
    //     let countAsString = localStorage.getItem('count')
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     let startValueAsString = localStorage.getItem('startValue')
    //     if (countAsString && maxValueAsString && startValueAsString) {
    //
    //         setCount(JSON.parse(countAsString))
    //         setMaxValue(JSON.parse(maxValueAsString))
    //         setStartValue(JSON.parse(startValueAsString))
    //     }
    // }, [])

    //
    // useEffect(() => {
    //     localStorage.setItem('count', JSON.stringify(count))
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [count, maxValue, startValue])


    const resetCallback = () => {
        dispatch(resetValueAC())

    }

    const setCallback = () => {
        dispatch(setValueAC())
    }
    const incCallback = () => {
        dispatch(incValueAC())
    }
    const onChangeMax = (value: number) => {
        dispatch(changeMaxValueAC(value))
    }

    const onChangeStart = (value: number) => {
        dispatch(changeStartValueAC(value))
    }

    return (
        <>
            <div className="container">
                <Counter count={setting.count} maxValue={setting.maxValue} startValue={setting.startValue}
                         incCallback={incCallback}
                         resetCallback={resetCallback} error={setting.error} disabled={!setting.settingDisabled}/>

            </div>
            <div className="container">
                <Settings startValue={setting.startValue} maxValue={setting.maxValue} onChangeMax={onChangeMax}
                          onChangeStart={onChangeStart} setCallback={setCallback} disabled={setting.settingDisabled}/>
            </div>
        </>
    );

}

export default AppWithRedux;

