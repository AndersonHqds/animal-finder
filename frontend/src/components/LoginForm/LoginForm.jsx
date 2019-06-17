import React, { useState, useEffect } from 'react';
import CreateInput from "../input/Input";
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '../../actions/user';
import { Redirect } from "react-router-dom";

import ShowMessage from '../showMessage/ShowMessage';


export default props => {

    const [form, setValues] = useState({
        email: '',
        password: '',
    });

    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const checkUser = evt => {
        evt.preventDefault();
        dispatch(requestLogin({
            email: form.email,
            password: form.password
        }));
        <Redirect to='/home' />
    };


    return (
        <>
            <h1> Login Page </h1>
            <form className="form-createuser" onSubmit={evt => checkUser(evt)}>

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

                <input
                    type="submit"
                    value="Entrar"
                />

            </form>

            <input
                type="button"
                value="Facebook" />

            <input
                type="button"
                value="Google" />

            {user.responseStatus.code !== 200 && (
                <ShowMessage message={user.responseStatus.msg} />
            )}
        </>
    );
};