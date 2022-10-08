import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'
//authoritation firebase
import { Provider } from 'react-redux';
import { store } from './firebase/store';

import MainApp from './MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}> {/*authoritation firebase*/}
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
</Provider> //authoritation firebase
);
