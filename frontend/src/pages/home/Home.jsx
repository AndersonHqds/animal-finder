import * as React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';


export default props => {
    return (
        <>
            <LoginForm />
            <Link to="/registrar">Go register form</Link>
        </>
    );
};