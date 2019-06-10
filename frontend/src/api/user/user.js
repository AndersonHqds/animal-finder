import { INVALID_TOKEN_MESSAGE, DEFAULT_URL_API } from "../../utils/consts";
const axios = require('axios');

export const getUser = user => {
    return axios.post(`${DEFAULT_URL_API}/signin`, {
        email: user.email,
        password: user.password
    })
        .then(response => response.data.token !== null ? response : getError(INVALID_TOKEN_MESSAGE))
        .catch(function (error) {
            return getError(error);
        });
}

const getError = error => {
    const msg = error.response.data;
    const errorCode = error.response.status || 0;
    return { msg, errorCode };
}