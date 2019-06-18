import { getUser } from '../api/user/user';
import { INVALID_TOKEN_MESSAGE, DEFAULT_URL_API } from "../utils/consts";
import axios from 'axios'

export function requestLogin(userData) {
    return async dispatch => {
        const response = await getUser(userData);
        const type = 'errorCode' in response ? 'SIGNIN_USER_FAILED' : 'SIGNIN_USER_SUCCESS';
        const obj = { ...response, type }
        dispatch(obj);
    }
}

export function isValidTokenUser(token){
    //console.log(token)
    return async dispatch => {
        try{
            const response = await axios.post(`${DEFAULT_URL_API}/validateToken`, {token})
            const obj = { token: response.data, type: 'VALIDATE TOKEN' }
            dispatch(obj)
        }
        catch(error){
            console.log(error)
            const obj = { token: false, type: 'VALIDATE TOKEN' }
            dispatch(obj)

        }
    }    
}