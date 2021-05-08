import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import ToDo from "./components/to-do";
const App = (props) => {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ToDo taskName={''} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
