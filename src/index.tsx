import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Dog from './Dog/Dog';
import Counter from './Counter/Counter';
import reportWebVitals from './reportWebVitals';
import Apple from './Apple/Apple';
import Pizza from './Pizza/Pizza';
import PizzaShow from './PizzaShow/PizzaShow';
import AppleClass from './AppleClass/AppleClass';
import PizzaClass1 from './PizzaClass1/PizzaClass1';
import PizzaClass2 from './PizzaClass2/PizzaClass2';
import PizzaClass3 from './PizzaClass3/PizzaClass3';
import PetRecord from './PetRecord/PetRecord';
import PetShow from './PetShow/PetShow';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
  <>
  {/* <App /> */}
  <Dog />
  <Counter/>
  <Apple/>
  <Pizza />
  <AppleClass />
  <PizzaClass1 />
  <PizzaClass2 />
  <PizzaClass3 />
  {/* <PetRecord id = {234}
    petName = {'Anna'}
    additionalInfo = {'additional'}
    dysplayInfo= {true} /> */}
  <PetShow />


  </>
  
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
