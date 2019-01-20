import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import reducers from 'reducers';

const loggerMiddleware = createLogger();

export default ({ children, initialState={}}) => {// we have destructured the props to set a default value to initialState
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise, loggerMiddleware));
    return(
        <Provider store={store}>
            {children}
        </Provider>
    );
};