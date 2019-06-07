import React, { useState } from 'react';
import CreateInput from "../input/Input";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todos';

export default props => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const checkUser = evt => {
        evt.preventDefault();
    };

    return (
        <>
            <form className="form-createuser" onSubmit={evt => checkUser(evt)}>
                <p>Contador: {counter}</p>
                <input type="button" onClick={() => dispatch(addTodo(''))} />
                <CreateInput
                    name="Email"
                    type="email"
                    value={user}
                    setValue={setUser}
                    isRequired={true}
                    tip="Digite seu email" />

                <CreateInput
                    name="Senha"
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