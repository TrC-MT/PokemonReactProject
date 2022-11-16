import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './Tests/reportWebVitals';

import './sections/hjake07/Jstyles.css';
import Page1 from './Pages/page1'
import Page2 from './Pages/page2'
// import { TheRouter, Navbar } from './sections/hjake07/Jsection';
//-------------------------------------

import App from './App'



//----------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
   
    

   

 </React.StrictMode>
);

//-----------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();