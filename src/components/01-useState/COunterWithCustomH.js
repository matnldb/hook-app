import React from 'react'
import './counter.css'
import { useCounter } from '../../hooks/useCounter'

export const COunterWithCustomH = () => {
  
   const {state, increment, decrement, reset} = useCounter(10);
   const factor = 5;
   return (
    <div>
        <h1>COunter With CustomH: {state} </h1>
        <hr/>
        <button className='btn btn-primary' onClick={()=>increment(factor)}>+{factor}</button>
        <button className='btn btn-primary' onClick={reset}>reset</button>
        <button className='btn btn-primary' onClick={()=>decrement(factor)}>-{factor}</button>
        
    </div>
  )
}
