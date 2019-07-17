import { getUser } from '../api/user/user';
import { USER_INFO } from "../utils/consts";

export function requestLogin(userData) {
    return async dispatch => {
        const response = await getUser(userData);
        let type = "SIGNIN_USER_FAILED"
        if (!('errorCode' in response)) {
            type = "STORE_USER_INFORMATION"
            localStorage.setItem(USER_INFO, JSON.stringify(response.data))
        }
        const obj = { ...response, type }
        dispatch(obj);
    }
}

export const registerLoggedUser = user => dispatch({ ...user, type: 'STORE_USER_INFORMATION' });

export const signOut = () => {
    return dispatch => {
        localStorage.setItem(USER_INFO, JSON.stringify({}));
        dispatch({ type: 'SIGNOUT' });
    }
}