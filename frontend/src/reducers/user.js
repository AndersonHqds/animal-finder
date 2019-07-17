
const INITIAL_STATE = {
    information: {},
    responseStatus: { msg: '', code: 0 },
    isValidToken: false
}

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'STORE_USER_INFORMATION':
            return { ...state, information: action.data, responseStatus: { msg: 'Success', code: 200 } }
        case 'SIGNIN_USER_FAILED':
            return { ...state, responseStatus: { msg: action.msg, code: action.errorCode } }
        case 'VALIDATE TOKEN':
            return { ...state, isValidToken: action.token }
        case 'SIGNOUT':
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }
}
