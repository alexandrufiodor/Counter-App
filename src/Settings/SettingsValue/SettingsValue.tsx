import React, {ChangeEvent} from "react";

type SettingsValuePropsType = {
    value: number
    onChange: (value: number) => void
}

export const SettingsValue = (props: SettingsValuePropsType) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.valueAsNumber)
    }
    return (
        <>
            <input type="number" value={props.value} onChange={onChange}/>
        </>
    );
}