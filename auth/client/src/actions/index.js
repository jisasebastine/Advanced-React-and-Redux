import { AUTH_USER, AUTH_ERROR } from 'actions/types';
import axios from 'axios';

export const signup = (formProps, callback) => dispatch => {
    axios.post('http://localhost:3090/signup', formProps)
        .then(
            response => {
                dispatch({type: AUTH_USER, payload: response.data.token});
                console.log('success: ', response.data);
                localStorage.setItem('token', response.data.token);
                callback();
            },
            error => {
                dispatch({type: AUTH_ERROR, payload: error.response.data.message});
                console.log('error: ', error.response.data.message);
            }
        ).catch((ex) => {
            console.log('exception: ', ex);
        });
};

export const signin = (formProps, callback) => dispatch => {
    axios.post('http://localhost:3090/signin', formProps)
        .then(
            response => {
                dispatch({type: AUTH_USER, payload: response.data.token});
                console.log('success: ', response.data);
                localStorage.setItem('token', response.data.token);
                callback();
            },
            error => {
                dispatch({type: AUTH_ERROR, payload: error.response.data});
                console.log('error: ', error.response);
            }
        ).catch((ex) => {
            console.log('exception: ', ex);
        });
};

export const signout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({type: AUTH_USER, payload:''});
}