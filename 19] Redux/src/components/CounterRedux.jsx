import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../feature/Slice';

export default function CounterRedux() {
    const dispatch = useDispatch();

    const data = useSelector(state => state.CounterKey);
    return (
        <div>
            <h1>Couner Redux :</h1>
            <h1>{data.count}</h1>
            <button onClick={() => dispatch(increament())}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>
        </div>
    )
}
