import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';
// import { Small } from './Small';

export const MemoHook = () => {
  const {counter,increment} = useCounter(10);
  const [show, setShow] = useState(true)

  const memoProcesoP = useMemo(() => procesoPesado(counter), [counter]);
  //tal como el useefect solo se ejcuta al cambiar las dependencias, memoriza el valor
    return (
    <div>
        <h1>Memo Hook </h1>
        <h3>Counter: <small> {counter}</small> </h3>
        <hr/>
        <p>{memoProcesoP}</p>
        <button
            className='btn btn-primary'
            onClick={increment}
        >+1</button>
        <button
            className='btn btn-outline-primary ml-5'
            onClick={()=>setShow(!show)}
        >Show/hide {JSON.stringify(show)}</button>
    </div>
  )
}
