import * as functions from "./user";

describe("Check user function login", () => {

    const SUCCESS_USER = {
        email: "mmarcmartins@gmail.com",
        password: "123456"
    }

    const USER_WRONG_CREDENTIAL = {
        email: "mmarcmartins@gmail.com",
        password: "248888844256"
    }

    const USER_NOT_FOUND = {
        email: "mmarcmartins4501374@gmail.com",
        password: "0"
    }

    test("Testing user auth with email and password corrects - Token", async () => {
        const reponse = await functions.getUser(SUCCESS_USER);
        expect(reponse.data.token).toBeDefined();
    })

    test("Testing user auth with email and password corrects - Status", async () => {
        const reponse = await functions.getUser(SUCCESS_USER);
        expect(reponse.status).toBeDefined();
    })

    test("Testing user auth with incorrect password", async () => {
        const response = await functions.getUser(USER_WRONG_CREDENTIAL);
        expect(response.errorCode).toBe(401);
    })

    test("User not found", async () => {
        const response = await functions.getUser(USER_NOT_FOUND);
        expect(response.errorCode).toBe(400);
    })


});