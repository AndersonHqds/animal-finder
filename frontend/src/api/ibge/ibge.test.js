import * as functions from "./ibge";

describe("Check user function login", () => {

    const WRONG_CEP = '12457854';
    const CORRECT_CEP = '13476406';

    test("CEP get right address", async () => {
        const response = await functions.getAdressCepApi(CORRECT_CEP);
        expect(response.logradouro).toEqual('Rua dos Florais');
    });

    test("Get error response from CEP api when cep is incorrect", async () => {
        const response = await functions.getAdressCepApi(WRONG_CEP);
        expect(response.erro).toBe(true);
    });
});