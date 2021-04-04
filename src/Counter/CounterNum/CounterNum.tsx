import React from "react";

type DisplayPropsType = {
    error: string
    count: number | string
    maxValue: number
}

export const CounterNum = (props: DisplayPropsType) => {
    return <div className='display'>
        <p className={(props.count === props.maxValue && props.maxValue > 0 || props.error !== '') ? 'active' : ''}> {props.error == '' ? props.count : props.error}</p>
    </div>

}