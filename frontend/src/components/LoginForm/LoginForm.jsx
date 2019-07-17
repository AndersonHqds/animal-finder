import React, { useState, useEffect } from 'react';
import CreateInput from "../input/Input";
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '../../actions/user';
import style from "./LoginForm.scss";
import { withRouter } from 'react-router'
import ShowMessage from '../showMessage/ShowMessage';
import { FACEBOOK_ICON, GOOGLE_ICON } from "../../utils/consts";

export default withRouter(props => {

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

    const checkUser = async evt => {
        evt.preventDefault();
        dispatch(requestLogin({
            email: form.email,
            password: form.password
        }));
    };

    useEffect(() => {
        if (user) {
            if (user.responseStatus.code === 200) {
                props.history.push('/home')
            }
        }
    }, [user])


    return (
        <>
            <h1> Faça seu login </h1>
            <form className={style.form} onSubmit={evt => checkUser(evt)}>

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
                    className={style.button}
                />

                <btn
                    type="submit"
                    value="entrar"
                    btnstyle="default"
                    btnclass="submitlogin" />

            </form>

            <btnSocial btntype="facebook" btnclass={style.facebookbutton} />
            <btnSocial btntype="google" btnclass={style.googlebutton} />

            {user.responseStatus.code !== 200 && (
                <ShowMessage message={user.responseStatus.msg} />
            )}
        </>
    );
});