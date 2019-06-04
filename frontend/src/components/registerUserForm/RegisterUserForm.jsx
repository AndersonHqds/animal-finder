import React, { useState } from 'react';
import CreateInput from "../input/Input";

export default props => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const checkUser = evt => {
        evt.preventDefault();
        console.log(user);
        console.log(password);
    };

    return (
        <>
            <form className="form-createuser" onSubmit={evt => checkUser(evt)}>

                <CreateInput
                    name="Email"
                    type="email"
                    value={user}
                    setValue={setUser}
                    isRequired={true}
                    tip="Digite seu email" />

                <CreateInput
                    name="Password"
                    type="password"
                    value={password}
                    setValue={setPassword}
                    isRequired={true}
                    tip="Digite sua senha" />

                <input type="submit" value="Entrar" />

            </form>
        </>
    );
};