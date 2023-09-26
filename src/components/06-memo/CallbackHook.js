import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { ChildCallback } from './ChildCallback';

export const CallbackHook = () => {
  
  const [first, setFirst] = useState(0);
  const increment = ()=>setFirst(first+1);
    return (
    <div>
        <h1>CallbackHook</h1>
        <hr/>
        <p>Count: {first}</p>
        <ChildCallback increment={increment}/>
    </div>
  )
}
