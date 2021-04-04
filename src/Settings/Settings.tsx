import {Button} from "../Buttons/Button";
import React, {useState} from "react";
import {SettingsValue} from "./SettingsValue/SettingsValue";

type SetValuePropsType = {
    startValue: number
    maxValue: number
    setCallback: () => void
    onChangeMax: (value: number) => void
    onChangeStart: (value: number) => void
    disabled: boolean
}

export const Settings = (props: SetValuePropsType) => {

    // const [maxValue, setMaxValue] = useState(0);
    // const [startValue, setStartValue] = useState(0);


    return (
        <>
            <div> max value: <SettingsValue value={props.maxValue} onChange={props.onChangeMax}/></div>
            <div> start value: <SettingsValue value={props.startValue} onChange={props.onChangeStart}/></div>
            <div className='buttons'>
                <Button name={'set'} onClick={props.setCallback}
                        disabled={props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 1 || props.disabled}/>
            </div>
        </>
    );
}