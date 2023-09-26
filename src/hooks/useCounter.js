import { useState } from "react"

export const useCounter = (inicial) => {
  const [counter, setState] = useState(inicial);

  const increment = ()=>{
  //const increment = (factor=1)=>{
    setState(counter+1);
  }
  
  const decrement = ()=>{
  //const decrement = (factor=1)=>{
    setState(counter-1);
  }

  const reset = ()=>{
    setState(inicial);
  }

  return {counter, increment, decrement,reset};
}
