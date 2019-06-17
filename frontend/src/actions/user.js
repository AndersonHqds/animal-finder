import { getUser } from '../api/user/user';


export function requestLogin(userData) {
    return async dispatch => {
        const response = await getUser(userData);
        const type = 'errorCode' in response ? 'SIGNIN_USER_FAILED' : 'SIGNIN_USER_SUCCESS';
        const obj = { ...response, type }
        dispatch(obj);
    }
}