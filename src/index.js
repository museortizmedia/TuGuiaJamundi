import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'

//authoritation firebase
/*
import { Provider } from 'react-redux';
import { store } from './firebase/store';
*/

import MainApp from './MainApp';
import { AuthProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider> {/*<Provider store={store}> authoritation firebase*/}
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
</AuthProvider>
);
