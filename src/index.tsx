import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Dog from './Dog/Dog';
import Counter from './Counter/Counter';
import reportWebVitals from './reportWebVitals';
import Apple from './Apple/Apple';
import Pizza from './Pizza/Pizza';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
  <>
  <App />
  <Dog />
  <Counter/>
  <Apple/>
  <Pizza />

  </>
  
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
