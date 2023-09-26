import React, { useEffect} from 'react'
import './effects.css'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomH = () => {
  
  const [formValues, handleInputChange] = useForm(
    {
        name: '', email: '', password:''
    }
  );

  const {name, email, password} = formValues;

  useEffect(()=>{},[]); // efecto solo para cuando se renderice por vez primera el componente
  useEffect(()=>{},[email]);  // se ejecutara cada vez que el email cambie

  const handelSubmit =(e)=>{
    e.preventDefault();
    console.log(formValues);
  }

 return (
    <form onSubmit={handelSubmit}>
        <div>
            <h1>FormWithCustomH</h1>
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

        <div className='form-group'>
            <input
                className='form-control'
                type='password'
                name='password'
                value={password}
                placeholder='*******'
                onChange={handleInputChange}
            />                    
        </div>
        <button type = 'submit' className='btn btn-primary'>Guardar</button>               
    </form>
  )
}
