import { getUser } from '../api/user/user';
import { INVALID_TOKEN_MESSAGE, DEFAULT_URL_API, USER_INFO } from "../utils/consts";
import axios from 'axios'

export function requestLogin(userData) {
    return async dispatch => {
        const response = await getUser(userData);
        let type = "SIGNIN_USER_FAILED"
        if(!('errorCode' in response)){
            type = "SIGNIN_USER_SUCCESS"
            localStorage.setItem(USER_INFO, JSON.stringify(response.data))
        }
        const obj = { ...response, type }
        dispatch(obj);
    }
}