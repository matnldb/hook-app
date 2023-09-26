import React, { memo } from 'react'

export const Small = memo(({value}) => {
    //el componente solo se rendrizara si las properties cambian, de lo contrario usara la version memorizada 
    //cuando tenga q redibujar algo 
  console.log('me volvi a llamar :(')
    return (
    <small>{value}</small>
  )
})
