import * as React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { isValidTokenUser } from '../../actions/user';

function PrivateRoute({ component: Component, ...rest }) {

    const loggedUser = useSelector(state => state.user.information);
    const isValidToken = useSelector(state => state.user.isValidToken)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(isValidTokenUser(
            loggedUser.token
        ));
    }, [])

    return (
        <Route
            {...rest}
            render={props =>
                isValidToken == null ? (<>Loading...</>) : 
                isValidToken ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;