import { INVALID_TOKEN_MESSAGE, DEFAULT_URL_API, USER_INFO } from "../../utils/consts";
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

export const isValidTokenUser = async(token) =>{
    try{
        const response = await axios.post(`${DEFAULT_URL_API}/validateToken`, {token})
        if(!response.data){
            localStorage.removeItem(USER_INFO)
            window.location.href = '/'
        } 
        return response.data
    }
    catch(error){
        localStorage.removeItem(USER_INFO)
        return false
    }
}

