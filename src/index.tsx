import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import { createStore, applyMiddleware, Action } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {default as thunk, ThunkMiddleware} from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {WebsiteState} from "./types/types";
import {app} from "./redux/reducers";

const loggerMiddleware = createLogger();

const store = createStore(
    app as any,
    {},
    applyMiddleware(thunk as ThunkMiddleware<WebsiteState, Action>, loggerMiddleware)
);

// Implement when ready for Redux
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
