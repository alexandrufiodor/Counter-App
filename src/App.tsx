import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

function App() {

    let [count, setCount] = useState<number | string>("enter values and press 'set'");
    let [maxValue, setMaxValue] = useState(0);
    let [startValue, setStartValue] = useState(0);
    let [error, setError] = useState('');
    let [settingDisabled, setSettingDisabled] = useState(false);


    useEffect(() => {
        let countAsString = localStorage.getItem('count')
        let maxValueAsString = localStorage.getItem('maxValue')
        let startValueAsString = localStorage.getItem('startValue')
        if (countAsString && maxValueAsString && startValueAsString) {

            setCount(JSON.parse(countAsString))
            setMaxValue(JSON.parse(maxValueAsString))
            setStartValue(JSON.parse(startValueAsString))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [count, maxValue, startValue])


    const resetCallback = () => {
        setCount(startValue);

    }

    const setCallback = () => {
        setMaxValue(maxValue)
        setStartValue(startValue)
        setCount(startValue)

        count = startValue

        setSettingDisabled(true)
    }
    const incCallback = () => {
        if (typeof count == 'number') {
            count++
        }
        setCount(count);
    }
    const onChangeMax = (value: number) => {
        setMaxValue(value)
        if (value < 1 || value <= startValue) {

            setError('error')
        } else {
            setError('')
        }
    }

    const onChangeStart = (value: number) => {
        setStartValue(value)

        if (value < 0 || value >= maxValue) {

            setError('Incorrect value')
        } else {
            setError('')
        }
    }

    return (
        <>
            <div className="container">
                <Counter count={count} maxValue={maxValue} startValue={startValue} incCallback={incCallback}
                         resetCallback={resetCallback} error={error} disabled = {!settingDisabled}/>

            </div>
            <div className="container">
                <Settings startValue={startValue} maxValue={maxValue} onChangeMax={onChangeMax}
                          onChangeStart={onChangeStart} setCallback={setCallback} disabled={settingDisabled}/>
            </div>
        </>
    );

}

export default App;

