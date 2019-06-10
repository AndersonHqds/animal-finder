export function signinUser(userData) {
    return {
        type: 'SIGNIN_USER',
        userData,
    }
}