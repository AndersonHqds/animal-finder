import { INVALID_TOKEN_MESSAGE, DEFAULT_URL_API } from "../../utils/consts";
import { useSelector } from 'react-redux';

const axios = require('axios');

export const getUser = user => axios.post(`${DEFAULT_URL_API}/signin`, {
    email: user.email,
    password: user.password
})
    .then(response => response.data.token !== null ? response : getError(INVALID_TOKEN_MESSAGE))
    .catch(getError);


const getError = error => {
    const msg = error.response.data;
    const errorCode = error.response.status || 0;
    return { msg, errorCode };
}


export const signUp = user => axios.post(`${DEFAULT_URL_API}/signup`, {
    ...user
}).then(re => re)
    .catch(getError);

export const isValidTokenUser = token => {
    axios.post(`${DEFAULT_URL_API}/validateToken`, {
        token
    })
        .then(resp => resp)
        .catch(() => false);
}