import React, { useState, useEffect } from 'react';
import CreateInput from "../input/Input";
import { useDispatch, useSelector } from 'react-redux';
import { signinUser } from '../../actions/user';
import { getUser } from '../../api/user/user';
import ShowMessage from '../showMessage/ShowMessage';


export default props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidMsg, setInvalidMsg] = useState(null);

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    const checkUser = async evt => {
        evt.preventDefault();
        const response = await getUser({
            email,
            password
        })
        checkResponse(response);
    };

    const checkResponse = response => {
        if ('errorCode' in response) return setInvalidMsg(response.msg);
        dispatch(signinUser(response.data));
    }

    useEffect(() => {
        alert(`Usuário logado na aplicação: ${user.email || "Nenhum"}`);
    }, [user])

    return (
        <>
            <h1> Login Page </h1>
            <form className="form-createuser" onSubmit={evt => checkUser(evt)}>
                <CreateInput
                    name="Email"
                    type="email"
                    value={email}
                    setValue={setEmail}
                    isRequired={true}
                    tip="Digite seu email" />

                <CreateInput
                    name="Senha"
                    type="password"
                    value={password}
                    setValue={setPassword}
                    isRequired={true}
                    tip="Digite sua senha" />

                <input
                    type="submit"
                    value="Entrar"
                />

            </form>

            <input
                type="button"
                value="Facebook" />

            <input
                type="submit"
                value="Google" />

            <input
                type="submit"
                value="Registrar" />

            {invalidMsg !== null && (
                <ShowMessage message={invalidMsg} />
            )}
        </>
    );
};