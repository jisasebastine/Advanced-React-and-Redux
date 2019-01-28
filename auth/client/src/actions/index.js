import { AUTH_USER, AUTH_ERROR } from 'actions/types';
import axios from 'axios';

export const signup = (formProps) => dispatch => {
    axios.post('http://localhost:3090/signup', formProps)
        .then(
            response => {
                dispatch({type: AUTH_USER, payload: response.data.token});
                console.log('success: ', response.data);
            },
            error => {
                dispatch({type: AUTH_ERROR, payload: error.response.data.message});
                console.log('error: ', error.response.data.message);
            }
        ).catch((ex) => {
            console.log('exception: ', ex);
        });
};