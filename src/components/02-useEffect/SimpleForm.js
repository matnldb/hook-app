import React, { useEffect, useState } from 'react'
import './effects.css'
import { Mensaje } from './Mensaje';

export const SimpleForm = () => {
  
  const [formState, setformState] = useState(
    {
        name: '', email: ''
    }
  );

  const {name, email} = formState;

  useEffect(()=>{},[]); // efecto solo para cuando se renderice por vez primera el componente
  useEffect(()=>{},[email]);  // se ejecutara cada vez que el email cambie

  const handleInputChange = ({target})=>{
    setformState({
        ...formState, [target.name]:target.value
    });

  }
    return (
    <>
        <div>
            <h1>useEffect</h1>
            <hr/>        
        </div>
        
        <div className='form-group'>
            <input
                className='form-control'
                type='text'
                name='name'
                value={name}
                autoComplete='off'
                placeholder='Como te llamas?'
                onChange={handleInputChange}
            />                    
        </div>
        
        <div className='form-group'>
            <input
                className='form-control'
                type='text'
                name='email'
                value={email}
                autoComplete='off'
                placeholder='example@email.com?'
                onChange={handleInputChange}
            />                    
        </div>
       {(name === '123')&& <Mensaje/>}         
    </>
  )
}
