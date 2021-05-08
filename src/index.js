import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import getStore from "./store";
import { Provider } from "react-redux";
const store = getStore();
const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  rootEl
);
reportWebVitals();
