import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
// import { SimpleFormGPT } from './components/02-useEffect/SimpleFormGPT';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocuScreen } from './components/04-useRef/FocuScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { LayoutEffecTest } from './components/05-useLayoutEffect/LayoutEffecTest';
// import { Memorize } from './components/06-memo/Memorize';
// import { MemoHook } from './components/06-memo/Memohook';
// import { CallbackHook } from './components/06-memo/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { ToDoApp } from './components/08-useReducer/ToDoApp';
import { MainApp } from './components/09-useContext/MainApp';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp'+;
// import { COunterWithCustomH } from './components/01-useState/COunterWithCustomH';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomH } from './components/02-useEffect/FormWithCutomH';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(            
                <MainApp />            
        );

