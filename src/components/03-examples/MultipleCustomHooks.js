import React from 'react';
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {

  const {loading, data} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
  const { author, quote } = (!!data && data[0]) || {};  
//!!data convierte de un posible objeto tipo null a false si data es undefined, no llega a evaluar data[0] 
// se proporciona un valor predeterminado {}    
  return (
    <div>
        <h1>Breakingbad quotes</h1>
        <hr/>
        {
          loading?//uso del operador ternario condicion?siVerdadero:sifalso
          (// para segun la respuesta muestre uno que otro componente
           <div className='alert alert-info text-center'>
             Loading....
           </div>
          ):
          (
            <blockquote className='blockquote text-end'>
                <p className='mb-0'>{quote}</p>
                <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
          )
        } 
        <button className='btn btn-primary' onClick={() => window.location.reload()}> Refresh</button>       
    </div>
  )
}
