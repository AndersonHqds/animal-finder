import * as React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { USER_INFO } from '../../utils/consts'

export default withRouter(props => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const user = localStorage.getItem(USER_INFO)
        if(user !== null)  {
            props.history.push('/home')
            setLoading(true)
        }
        else {
            setLoading(false)
        }
    }, [])

    if(loading){
        return <>Loading...</>
    }
    else{
        return (
            <>
                <LoginForm />
                <Link to="/registrar">Go register form</Link>
            </>
        );
    }
});