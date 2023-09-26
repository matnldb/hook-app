import React, { useEffect, useReducer } from 'react'
import { toDoReducer } from './toDoReducer';
import './style.css'
import TodoList from './TodoList';
import ToDoAdd from './ToDoAdd';


const init  = ()=>{
    return JSON.parse(localStorage.getItem('toDos')) || [];
}

export const ToDoApp = () => {

  const [toDos, dispatch] = useReducer(toDoReducer, [],init);

  useEffect(() => {
    localStorage.setItem('toDos',JSON.stringify(toDos));
    }, [toDos])
  
  const handleAdd = (newToDo)=>{
    dispatch({
        type: 'add',
        payload: newToDo,});
  }

  const handleDelete =(toDoid)=>{
       const action = {
            type: 'delete', 
            payload: toDoid
       }
       dispatch(action);       
  }

  const handleToggle = (toDoid)=>{
    dispatch({
        type:'toggle', payload:toDoid,
    });
  }

  return (
    <div>
        <h1>ToDoApp</h1>
        <hr/>
        
        <div className='row'>
            
            <div className='col-7'>
                <TodoList
                    toDos = {toDos}
                    handleDelete = {handleDelete}
                    handleToggle = {handleToggle}
                />
            </div>

            <div className='col-5'>
                <ToDoAdd
                    handleAdd ={handleAdd}
                />
            </div>

        </div>

    </div>
  )
}
