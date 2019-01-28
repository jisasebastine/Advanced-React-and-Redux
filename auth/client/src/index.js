import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';

import App from 'components/App';
import Welcome from 'components/Welcome';
import Signup from 'components/auth/Signup';
import reducers from 'reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, createLogger()));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path='/' component={Welcome}></Route>
                <Route exact path='/signup' component={Signup}></Route>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);