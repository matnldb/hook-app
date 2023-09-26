import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';

const ToDoAdd = ({handleAdd}) => {

  const [{description}, handleInputChange,reset] = useForm({description:''});
  
  const handleSubmit = (e)=>
  {
    e.preventDefault();   

    const newToDo = {
        id: new Date().getTime(),
        desc:description,
        done: false,
    }
    handleAdd(newToDo);
    reset();

  }  
  
  return (
    <>
        <h1>Agregar Tareas</h1>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='description'
                        placeholder='Nombre Tarea'
                        autoComplete='off'
                        className='form-control'
                        value={description}
                        onChange={handleInputChange}
                    />
                    <button type = 'submit' className='btn btn-outline-primary w-100 mt-2'> Agregar</button>
                    {/* con w-100 se logra que el boton ocupe todo el ancho disponible */}
                </form>
    </>
  )
}

ToDoAdd.propTypes = {}

export default ToDoAdd