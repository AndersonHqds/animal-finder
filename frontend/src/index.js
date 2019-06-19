import React from "react";
import ReactDom from "react-dom";
import store from './store';
import { Provider } from 'react-redux';
import Routes from "./routers";


ReactDom.render(
    <Provider store={store}>
        <Routes />
    </Provider >
, document.getElementById("app"));
