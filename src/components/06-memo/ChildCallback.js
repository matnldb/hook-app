import React from 'react'

export const ChildCallback = ({increment}) => {
  console.log('Se renderizo')
    return (
    <div>
        <h1>ChildCallback</h1>
        <hr/>
        <button onClick={increment}>Incrementar</button>
    </div>
  )
}
