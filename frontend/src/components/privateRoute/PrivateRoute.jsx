import * as React from 'react';
import { Redirect, Route } from "react-router-dom";

import Template from '../template/Template'
import { USER_INFO } from '../../utils/consts'

function PrivateRoute({ component: Component, ...rest }) {
    const user = JSON.parse(localStorage.getItem(USER_INFO)) || null

    return (
        <Route
            {...rest}
            render={props =>
                user ? (
                    <Template children={<Component {...props} />} />
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