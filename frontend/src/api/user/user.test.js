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
        expect(reponse.status).toBe(200);
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


describe("Testing register functions user", () => {

    const milliseconds = new Date().getTime();

    const MOCK_USER = {
        "name": "Marcelo de Souza Martins",
        "email": `mmarcmartins${milliseconds}@gmail.com`,
        "password": "123456",
        "confirmPassword": "123456",
        "phone": "19991327383",
        "city": "Americana",
        "state": "SP",
        "cep": "13476406",
        "street": "123",
        "number": "104",
        "picture": "..."
    };


    test("User created", async () => {
        const response = await functions.signUp(MOCK_USER);
        expect(response.status).toBe(201);
    })

    test("User not matching password and password confirm", async () => {
        const MOCK_INVALID_CONFIRMPASSWORD = { ...MOCK_USER, confirmPassword: '11111' };
        const error = await functions.signUp(MOCK_INVALID_CONFIRMPASSWORD);
        expect(error.msg).toEqual('Senhas não conferem');
        /*
        result.status = 400
        result.data = Senhas não conferem
        */
    })

    test("User dont have password", async () => {
        const MOCK_EMPTY_PASSWORD = { ...MOCK_USER, password: '' };
        const error = await functions.signUp(MOCK_EMPTY_PASSWORD);
        expect(error.msg).toEqual('Senha não informada');
        /*
        response.status = 400
        response.data = Senha não informada
        */
    })
    test("User dont have email", async () => {
        const MOCK_EMPTY_EMAIL = { ...MOCK_USER, email: '' };
        const error = await functions.signUp(MOCK_EMPTY_EMAIL);
        expect(error.msg).toEqual('E-mail não informado');
        /*
        response.status = 400
        response.data = E-mail não informado
        */
    })

    test("User dont have name", async () => {
        const MOCK_EMPTY_NAME = { ...MOCK_USER, name: '' };
        const error = await functions.signUp(MOCK_EMPTY_NAME);
        expect(error.msg).toEqual('Nome não informado');
        /*
        response.status = 400
        response.data = Nome não informado
        */
    })

    test("User already registered", async () => {
        const MOCK_USER_EXISTS = { ...MOCK_USER, email: 'mmarcmartins@gmail.com' };
        const error = await functions.signUp(MOCK_USER_EXISTS);
        expect(error.msg).toEqual('Usuário já cadastrado');
        /*
        response.status = 400
        response.data = Usuário já cadastrado
        */
    })

})