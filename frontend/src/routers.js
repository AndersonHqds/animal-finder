import * as React from 'react';
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Principal from "./pages/principal/Principal";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

export default props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/registrar" component={Register} />
                <PrivateRoute exact path="/home" component={Principal} />
            </Switch>
        </BrowserRouter>
    );
};

