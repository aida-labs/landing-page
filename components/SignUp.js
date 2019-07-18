import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import Router from "next/router";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {user, logout} = this.props;
    return(
      <div className="signUpStyle">
        <h3 style={{color:"white"}}>Focus on your apps, not ops</h3>
        <hr style={{color: "#6CBEFB", backgroundColor: "#6CBEFB", height: 1, width: 100}}/>
        <h6 style={{color:"white"}}>Let us handle the tedious stuff</h6>
        <div style={{marginTop: 15}}>
          <Button size="md" href="https://app.aidalabs.io/signup" style={{color: "white", backgroundColor: "#00CC66", border: "none", width: 200, height: 50, lineHeight: "35px"}}>Get started for free</Button>
        </div>

      </div>
    );
  }

}

export default SignUp;

