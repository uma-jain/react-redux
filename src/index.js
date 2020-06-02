import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import App from "./App";
import { Provider}from "react-redux"
import rootreducer from  "./reducers/rootreducer"
const store = createStore(rootreducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}><App /></Provider>, rootElement
);
