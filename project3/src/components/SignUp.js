import React, { Component } from "react";
import { firebaseApp, userRef } from "../firebase";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";

import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Image from '../blue_background.jpg';

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  }
});

const signup = ({email, password, firstName, lastName}) => {
  // check that user probided first and last name
  if(!firstName || !lastName) {
    return false;
  } // Note: you need to add errors for missing names!

  //firebase functionality to create users with authentication.
  firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        userRef.child(data.user.uid).set({
          firstName,
          lastName,
          email
        });
          return true;
      })
      .catch(err => {
          console.log(err);
          return err;
  });
};

class SignUp extends Component {
    
  state = { email: "", password: "", firstName: "", lastName: "" };

  handleFirstNameChange = ({ target }) => {
    this.setState({ firstName: target.value });
  };

  handleLastNameChange = ({ target }) => {
    this.setState({ lastName: target.value });
  };
  
  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmit = () => {
    const { email, password, firstName, lastName } = this.state;
    const result = signup(email, password, firstName, lastName);
    console.log(result);
  };

  render() {
      const {isAuthenticated } = this.props;
      if (isAuthenticated) {
        return <Redirect to="/home" />;
      } 
      else {
        return (
          <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  onChange={this.handleFirstNameChange}
                >
                </TextField>

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={this.handleLastNameChange}
                >
                </TextField>

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={this.handleEmailChange}
                >
                </TextField>

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={this.handlePasswordChange}
                >
                </TextField>
                
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Sign Up
                </Button>

            <Link to="login">Click to Login</Link>
          </Paper>
        </Container>
      );
    }
    }
}

function mapStateToProps(state) {
    return {
      isLoggingIn: state.auth.isLoggingIn,
      loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated
    };
  }

export default withStyles(styles)(connect(mapStateToProps)(SignUp));
