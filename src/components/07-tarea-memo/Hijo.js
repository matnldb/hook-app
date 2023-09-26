import React, { memo } from 'react'

export const Hijo = memo(({numero, incrementar}) => {//con memo el componente solo se renderiza
  //si cambian sus properties
    console.log('me volvi a generar');
  return (
    <button
        className='btn btn-primary mr-3'
        onClick={()=>incrementar(numero)}
    >{numero}
    </button>
  )
})
