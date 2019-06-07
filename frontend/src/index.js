import React from "react";
import ReactDom from "react-dom";
import App from "./pages/home/Home";
import store from './store';
import { Provider } from 'react-redux';


ReactDom.render(<Provider store={store}><App /></Provider >, document.getElementById("app"));
