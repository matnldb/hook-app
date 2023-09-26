import React, { useCallback, useState } from 'react'
import { Hijo } from './Hijo';

export const Padre = () => {

  const numeros = [2,4,6,8,10];
  const [valor, setValor] = useState(0);
  
  const incrementar = useCallback(//con el uso de usecallback aseguro que solo cambie si cambian sus dependecnia
    (num) => 
      {
        setValor(v => v + num)
        //como solo se necesita que la dependencia en usecallback sea la funcion y no sus argumenos, evitamos
        //usamos setValor(v => v + num) en lugar de setValor(valor+num);
      },
    [setValor],
  ) ; 
  
  return (
    <div>
        <h1>Padre</h1>
        <p>Total:{valor}</p>
        <hr/>
        {
            numeros.map(n=>(
                            <Hijo
                                key={n}
                                numero = {n}
                                incrementar={incrementar}
                            />
                        ))
        }
    </div>
  )
}
