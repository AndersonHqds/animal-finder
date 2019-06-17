
const INITIAL_STATE = {
    information: {},
    responseStatus: { msg: '', code: 0 }
}

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SIGNIN_USER_SUCCESS':
            return { ...state, information: action.userData, responseStatus: { msg: 'Success', code: 200 } }
        case 'SIGNIN_USER_FAILED':
            return { ...state, responseStatus: { msg: action.msg, code: action.errorCode } }
        default:
            return state;
    }
}
