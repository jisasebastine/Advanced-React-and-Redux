import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from 'reducers/auth';

export default combineReducers({
    auth, // using ES6 syntax instead of auth: auth
    form: formReducer
});