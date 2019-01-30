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
import Feature from 'components/Feature';
import reducers from 'reducers';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

const store = createStore(reducers, 
    {
        auth: { authenticated: localStorage.getItem('token')}
    },
    applyMiddleware(reduxThunk, createLogger())
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path='/' component={Welcome}></Route>
                <Route exact path='/signup' component={Signup}></Route>
                <Route exact path='/feature' component={Feature}></Route>
                <Route exact path='/signout' component={Signout}></Route>
                <Route exact path='/signin' component={Signin}></Route>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);