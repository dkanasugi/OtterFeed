import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import Edit from "./components/EditAccount";
import Landing from "./components/Landing";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <Route exact path="/" component={Landing}/>
      <ProtectedRoute
        exact
        path="/home"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/account" component={Account} />
      <Route path="/edit" component={Edit} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);