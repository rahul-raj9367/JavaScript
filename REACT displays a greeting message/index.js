import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting message=", Welcome to Website"/>
  </React.StrictMode>
);

