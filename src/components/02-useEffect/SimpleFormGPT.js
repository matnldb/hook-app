import React from 'react';
import './effects.css'
import { useForm } from '../../hooks/useForm';


export const SimpleFormGPT = ()=> {
    
    const initialFields = [ //arreglo con los valores iniciales de los textBox
      { name: 'name', placeholder: 'Como te llamas?', type: 'text' },
      { name: 'email', placeholder: 'example@email.com?', type: 'text' },
      { name: 'password', placeholder: '*******', type: 'password' },
    ];
    
    const [formValues, handleInputChange] = useForm({name: '',email: '',password: '',});
    const handleSubmit = (e)=>{e.preventDefault();console.log(formValues);}

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <h1>GPT</h1>
            <hr />
        </div>

        <div>
            {initialFields.map((field) => (
                <div className='form-group' key={field.name}>
                    <input
                        className='form-control'
                        type={field.type}
                        name={field.name}
                        value={formValues[field.name]}
                        autoComplete='off'
                        placeholder={field.placeholder}
                        onChange={handleInputChange}
                    />
                </div>
            ))}
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </div>

    </form>    
  );
}