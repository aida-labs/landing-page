import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import Router from "next/router";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {user, logout} = this.props;
    return(
      <div className="headerStyle">
        <Navbar variant="dark" expand="sm">
          <Navbar.Brand href="https://aidalabs.io"><img style={{height: "auto", width: "150px"}} src="/static/logo_white.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav style={{color: "white"}} >
              <Nav.Link style={{color: "white"}}  href="https://blog.aidalabs.io/">Blog</Nav.Link>
            </Nav>
            <Nav style={{color: "white"}} >
              <Nav.Link style={{color: "white"}}  href="https://discord.gg/p3UdqS8">Discord</Nav.Link>
            </Nav>
            <Nav style={{color: "white", paddingRight: 10}} >
              <Nav.Link style={{color: "white"}}  href="https://app.aidalabs.io/login">Log In</Nav.Link>
            </Nav>
            <Button href="https://app.aidalabs.io/signup" style={{color: "white", backgroundColor: "#00CC66", border: "none"}}>Sign Up</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}

export default Header;
