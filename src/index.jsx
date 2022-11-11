import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'

//authoritation firebase
/*
import { Provider } from 'react-redux';
import { store } from './firebase/store';
*/

import MainApp from './MainApp';
import { FireProvider } from './context/fireContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FireProvider> {/*<Provider store={store}> authoritation firebase*/}
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
</FireProvider>
);
