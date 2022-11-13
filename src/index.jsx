/*
REACT ICON: https://react-icons.github.io/react-icons/icons?name=fa
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'

import MainApp from './MainApp';
import { FireProvider } from './context/fireContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FireProvider>
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
</FireProvider>
);
