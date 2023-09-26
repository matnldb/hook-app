export const toDoReducer = (state=[], action)=>{

    switch (action.type) {
        case 'add':            
             return [...state,action.payload];
        case 'delete':
            return state.filter(t=>t.id !== action.payload);
        case 'toggle':
            return state.map(t=>
                (                 
                    (t.id === action.payload)?{...t, done:!t.done}:t
                )// return implicito
                    
            );
        default:
            return state;
    }
}