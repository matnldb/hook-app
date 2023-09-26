import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import './layout.css'

export const LayoutEffecTest = () => {

  const {data} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
  const {quote } = (!!data && data[0]) || {};  
//!!data convierte de un posible objeto tipo null a false si data es undefined, no llega a evaluar data[0] 
// se proporciona un valor predeterminado {}    
  return (
    <div>
        <h1>Layout Effec Test</h1>
        <hr/>
        <blockquote className='blockquote text-end'>
            <p className='mb-0'>{quote}</p>
            {/* <footer className='blockquote-footer'>{author}</footer> */}
         </blockquote>         
        <button className='btn btn-primary' onClick={() => window.location.reload()}> Refresh</button>       
    </div>
  )
}
