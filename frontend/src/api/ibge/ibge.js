const axios = require('axios');

export const getAllStatesBrazil = () =>
    axios.post(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        .then(response => response.data.length > 0 ? getStates(response.data) : ['Nenhum estado encontrado'])
        .catch(handleError);

const getStates = data => data.map(state => state.sigla);

const handleError = error => {
    if (Array.isArray(error)) return ['Erro', error];
    return { error }
}

export const getAdressCepApi = cep =>
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.data && response.data)
        .catch(handleError);