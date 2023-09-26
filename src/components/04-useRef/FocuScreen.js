import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocuScreen = () => {
  
  const inputRef = useRef();

  const handleClick = ()=>{
    // document.querySelector('input').focus();
    // document.querySelector('input').select();
    inputRef.current.select();
    //console.log(inputRef.current.value)
  }
  return (
    <div>
        <h1>FocuScreen</h1>
        <hr/>
        <input
            ref={inputRef}
            className='form-control'
            placeholder='Su nombre'   
        />
        <button 
            className='btn btn-outline-primary'
            onClick={handleClick}
        >Focus
        </button>
    </div>
  )
}
