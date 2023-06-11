import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/css/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/login" exact />
          <Header />
          <Route component={Home} path="/" exact />
          <Route component={Home} path="/stats" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
