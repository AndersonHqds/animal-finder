import React, { useState, useEffect } from 'react';
import CreateInput from "../input/Input";
import CustomSelect from '../customSelect/CustomSelect';
import { getAllStatesBrazil, getAdressCepApi } from "../../api/ibge/ibge";
import { signUp } from "../../api/user/user";
import ShowMessage from '../showMessage/ShowMessage';
import FileUploader from "../fileUploader/fileUploader.jsx";

export default props => {

    const initialStateForm = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        city: '',
        state: 'SP',
        cep: '',
        street: '',
        number: '',
        neighborhood: '',
        picture: '',
    };

    const [form, setFormValues] = useState({ ...initialStateForm });
    const [allStates, setAllStates] = useState([{}]);
    const [hasMessage, setMessage] = useState('');

    const resetForm = () => {
        //  setFormValues({ ...initialStateForm });
    };

    const updateField = e => {
        setFormValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const stateObjectCreator = state => {
        return {
            value: state,
            name: state
        }
    }
    const enableWarning = msg => {
        setMessage(msg);
    };

    const requestLogin = evt => {
        evt.preventDefault();
        signUp(form).then(result => {
            console.log(result);
            if ('errorCode' in result) {
                enableWarning(result.msg)
            } else {
                enableWarning(result.data);
                resetForm();
            }

        })
    };

    const setValuesCep = data => {
        setFormValues({
            ...form,
            neighborhood: data.bairro,
            city: data.localidade,
            selectedState: data.uf,
            street: data.logradouro
        })
    };

    const setSelectedState = state => {
        setFormValues({
            ...form,
            state
        })
    };

    const getAddressCep = cep => {
        if (cep.trim().length < 8) return;
        getAdressCepApi(cep).then(data => {
            if ('erro' in data) {
                enableWarning('Cep não encontrado');
                return;
            }
            setValuesCep(data);
        })
    };

    useEffect(() => {
        getAllStatesBrazil().then(states => {
            const _allStates = states.map(stateObjectCreator);
            setAllStates(_allStates);
        });
    }, []);

    return (

        <div>


            <h1> Crie sua conta </h1>

            <form className="form-createuser" onSubmit={evt => requestLogin(evt)}>
                <FileUploader 
                name="picture"
                setValue={updateField}/>
                
                <CreateInput
                    label="Nome"
                    name="name"
                    type="text"
                    value={form.name}
                    setValue={updateField}
                    isRequired={true}
                    pattern="notSpecialCharacter"
                    tip="Digite seu nome completo, sem caracteres especiais" />

                <CreateInput
                    label="E-mail"
                    name="email"
                    type="email"
                    value={form.email}
                    setValue={updateField}
                    isRequired={true}
                    tip="Digite seu email" />

                <CreateInput
                    label="Senha"
                    name="password"
                    type="password"
                    value={form.password}
                    setValue={updateField}
                    isRequired={true}
                    tip="Digite sua senha" />

                <CreateInput
                    label="Confirmar Senha"
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    setValue={updateField}
                    isRequired={true}
                    tip="Confirme sua senha" />


                <CreateInput
                    label="Telefone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    setValue={updateField}
                    isRequired={true}
                    pattern="numberOnly"
                    tip="Digite seu telefone, somente números" />

                <CustomSelect options={allStates} selected={form.state} setSelectedState={setSelectedState} />

                <CreateInput
                    label="Cidade"
                    name="city"
                    type="text"
                    value={form.city}
                    setValue={updateField}
                    isRequired={true}
                    tip="Digite o nome de sua cidade" />

                <CreateInput
                    label="Bairro"
                    name="neighborhood"
                    type="text"
                    value={form.neighborhood}
                    setValue={updateField}
                    isRequired={true}
                    tip="Digite o nome do seu bairro" />

                <CreateInput
                    label="Rua"
                    name="street"
                    type="text"
                    value={form.street}
                    setValue={updateField}
                    isRequired={true}
                    tip="Digite o nome da sua rua" />

                <CreateInput
                    label="Número"
                    name="number"
                    type="text"
                    value={form.number}
                    setValue={updateField}
                    isRequired={true}
                    tip="Digite o numero de sua casa" />

                <CreateInput
                    label="CEP"
                    name="cep"
                    type="text"
                    pattern="numberOnly"
                    value={form.cep}
                    onBlur={getAddressCep}
                    setValue={updateField}
                    tip="Digite seu CEP, somente números." />

                <input
                    type="submit"
                    value="Cadastrar"
                />
            </form>
            {hasMessage !== '' && (
                <ShowMessage message={hasMessage} />
            )}
        </div>
    );
};

