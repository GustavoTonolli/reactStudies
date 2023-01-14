import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // importando o App.js como App
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Root onde o app sera renderizado
root.render( // dentro da funcao passa o que sera renderizado em root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* ReactDOM.render( esse era o modo antigo, nao funciona mais!
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
