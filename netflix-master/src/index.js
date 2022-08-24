import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import {app, db} from './lib/firebase.prod';
import {AppContext} from './context/app-context';


render(
    <>
        <AppContext.Provider value={{app, db}}>
            <GlobalStyles />
            <App />
        </AppContext.Provider>
    </>,
    document.getElementById('root')
);
