import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import {app} from './lib/firebase.prod';
import {AppContext} from './context/app-context';


render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById('root')
);
