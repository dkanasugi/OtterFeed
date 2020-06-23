import React, { Component, useState } from "react";
import { firebaseApp } from "../firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";

import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import editUser from "./Edit";


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
  },
  TextField: {
      marginLeft: '10px',
      marginRight: '10px'
  },
});

//edits the first and last name without changing email
const update = (firstName, lastName, email) => {
    const uid = firebaseApp.auth().currentUser.uid;
    const data = {
            uid,
            email, 
            firstName,
            lastName
    };
    const result = editUser(data)
};


class EditAccount extends Component {
  constructor() {
    super()

    this.app = firebaseApp;
    const userId = firebase.auth().currentUser.uid;
    this.database = this.app.database().ref('/users/'+userId).child('email');

    this.state = {
        email: "",
    }
  } 
    componentDidMount() {
        this.database.on('value', snap=> {
            this.setState({
                email: snap.val()
            });
        });
    }

  handleFirstNameChange = ({ target }) => {
    this.setState({ firstName: target.value });
  };

  handleLastNameChange = ({ target }) => {
    this.setState({ lastName: target.value });
  };

  handleSubmit = () => {
    const {firstName, lastName, email } = this.state;
    const result = update(firstName, lastName, email);

    console.log(result);
  };

  render() {
        return (
          <div>
            <Typography component="h1" variant="h5">
              Edit Account
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
            <div>
                <Link to ="account">
                <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
                >
                Edit Changes
                </Button>
                </Link>
                
                <Link to ="account">
                    <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    >
                    Return to Account
                    </Button>
                </Link>
            </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
    return {
      isLoggingIn: state.auth.isLoggingIn,
      loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated
    };
  }

export default withStyles(styles)(connect(mapStateToProps)(EditAccount));
