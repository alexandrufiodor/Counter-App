import React from "react";

type IncButtonPropsType = {
    onClick: () => void
    disabled: boolean
    name: string
}

export const Button = (props: IncButtonPropsType) => {
    return <button className='inc' onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
}
