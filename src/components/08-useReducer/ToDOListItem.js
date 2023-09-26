import React from 'react'
import PropTypes from 'prop-types'

const ToDOListItem = ({t, i, handleToggle, handleDelete}) => {
  return (
        <li key={t.id} className='list-group-item'>
                <p className={`${t.done && 'complete' }`} onClick={()=>handleToggle(t.id)}>{i+1}. {t.desc}</p>
                <button className='btn btn-danger' onClick={()=>handleDelete(t.id)}>Borrar</button>
        </li>
  )
}

ToDOListItem.propTypes = {}

export default ToDOListItem