import * as React from 'react';
import { Redirect, Route } from "react-router-dom";
import { isValidTokenUser } from '../../api/user/user';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
    const loggedUser = useSelector(state => state.user.information);
    return (
        <Route
            {...rest}
            render={props =>
                isValidTokenUser(loggedUser.token) ? (
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