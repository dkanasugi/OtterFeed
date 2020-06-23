import React, { Component } from "react";
import { Container, Row, Col, Navbar, Icon, NavItem } from "react-materialize";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import Feed from "./Feed";
import Profile from "./Profile";
import { Link, Redirect } from "react-router-dom";

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    const { isLoggingOut, logoutError } = this.props;
    const {isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/home" />;
    } 
    else {    
    return (
      <Container>
        <div style={{background: "#034A51"}}>
          <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="./">Otter Feed</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
          >
            <NavItem>
              <Link to="/account">Account</Link>
            </NavItem>
            <NavItem onClick={this.handleLogout}>
              Log Out
              {isLoggingOut && <p>Logging Out....</p>}
              {logoutError && <p>Error logging out</p>}
            </NavItem>
          </Navbar>
        </div>
        <Row>
          <Col className='teal' s={12} m={4}>
            <Profile />
          </Col>
          <Col className='red' s={12} m={8}>
            <Feed />
          </Col>
        </Row>
      </Container>
    );
  }
}
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);