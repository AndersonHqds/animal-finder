export default function user(state = [], action) {
    switch (action.type) {
        case 'SIGNIN_USER':
            return { ...state, ...action.userData }
        default:
            return state;
    }
}