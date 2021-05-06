import React from "react";
import {Button} from "../Buttons/Button";
import {CounterNum} from "./CounterNum/CounterNum";

type DisplayValuePropsType = {
    error: string
    count: number | string
    maxValue: number
    startValue: number
    incCallback: () => void
    resetCallback: () => void
    disabled: boolean
}

export const Counter = (props: DisplayValuePropsType) => {
    return (
        <>
            <CounterNum count={props.count} maxValue={props.maxValue} error={props.error}/>

            <div className='buttons'>
                <Button name={'inc'} onClick={props.incCallback} disabled={props.count === props.maxValue || props.disabled || props.error !== ''}/>
                <Button name={'reset'} onClick={props.resetCallback} disabled={props.count === props.startValue || props.disabled || props.error !== ''}/>


            </div>
        </>
    );
}