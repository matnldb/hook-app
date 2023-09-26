import { useEffect, useRef, useState} from "react";

export const useFetch = (url)=>
{
    
    const [state, setState] = useState({data:[], loading:true,error:null});
    const isMounted = useRef(true);

    useEffect(() => {
         
      return () => {
        isMounted.current = false;
      }
    }, []);
    
    
    useEffect(() => {
        fetch(url)
        .then(resp =>resp.json())
        .then(data =>
            // setTimeout(()=>
             {
                if(isMounted.current)
                {
                    setState({
                        loading:false,error:null, data
                    });
                }
                else console.log('No montado');
               
            },4000)//);
    
    //   return () => {
    //     second
    //   }
    }, [url]);
    
   
 return state;
}