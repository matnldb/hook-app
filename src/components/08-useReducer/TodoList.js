import React from 'react'
import PropTypes from 'prop-types'
import ToDOListItem from './ToDOListItem'

const TodoList = ({toDos, handleDelete, handleToggle}) => {
  return (
        <ol className='list-group list-group-flush'>
            {
                toDos.map((t,i) => //la i indica el indice, es propio de la funcion map de los arreglos
                        (<ToDOListItem 
                            key = {t.id}
                            t ={t}
                            i = {i}
                            handleToggle={handleToggle}
                            handleDelete={handleDelete}
                        />))
            }
        </ol>
  )
}

TodoList.propTypes = {}

export default TodoList