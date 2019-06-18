
const INITIAL_STATE = {
    information: {},
    responseStatus: { msg: '', code: 0 },
    isValidToken: false
}

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SIGNIN_USER_SUCCESS':
            return { ...state, information: action.data, responseStatus: { msg: 'Success', code: 200 } }
        case 'SIGNIN_USER_FAILED':
            return { ...state, responseStatus: { msg: action.msg, code: action.errorCode } }
        
        case 'VALIDATE TOKEN':
            return { ...state, isValidToken: action.token}

        default:
            return state;
    }
}
