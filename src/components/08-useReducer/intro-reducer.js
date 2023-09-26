const initialState = [
    {
        id:1,toDo: 'Comprar Pan', done:false
    }
];

const miReducer = (state=initialState, action)=>{
    if(action?.type === 'agregar')
    {
        return [...state,action.payload];    
    }
    return state;
}

let toDos = miReducer();

const newToDo = {id:2,toDo: 'Comprar Leche', done:false}

const action = {type: 'agregar',payload: newToDo}

toDos =miReducer(toDos,action)
console.log(toDos)