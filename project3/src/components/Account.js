import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from 'firebase';
import { Link } from "react-router-dom";
import { firebaseApp } from "../firebase";
import Button from "@material-ui/core/Button";

class Account extends Component {

constructor() {
    super()

    this.app = firebaseApp;
    const userId = firebase.auth().currentUser.uid;
    this.database = this.app.database().ref('/users/'+userId).child('firstName');
    this.database2 = this.app.database().ref('/users/' + userId).child('lastName');

    this.state = {
        firstName: '',
        lastName: ''
    }
}

componentDidMount() {
    this.database.on('value', snap=> {
        this.setState({
            firstName: snap.val()
        });
    },
    this.database2.on('value', snap=>{
        this.setState({
            lastName: snap.val()
        })
    }
    ));
}

    render() {   
        
        return (
        <div>
            <h1>Account Info</h1>
            <p>Welcome</p>
            <p>{this.state.firstName + ' ' + this.state.lastName + ' !!'} </p>
            <div>
                <Link to ="/">
                <Button
                type="button"
                variant="contained"
                color="primary"
                >
                Return to Home
                </Button>
                </Link>
                
                <Link to ="edit">
                    <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    >
                    Edit Account
                    </Button>
                </Link>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Account);