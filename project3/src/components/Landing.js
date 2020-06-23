import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import "../css/Landing.css";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    const {isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/home" />;
    } 
    else {
    return (
      <div class="showcase">
        <div class="showcase-top">
            {/* <a class="btn btn-rounded">Sign In</a> */}
            <Link to="login">
                <Button class="btn btn-rounded">
                    <p>Sign In</p>
                </Button>
            </Link>
        </div>  
        <div class="showcase-content">
            <h1>OtterFeed</h1>
            <p>Kick Back. Relax. Have a blast.</p>
        </div>    
      </div>
      
    );
  }}
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default (connect(mapStateToProps)(Landing));