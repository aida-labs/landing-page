import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
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
      <div className="heroStyle">
        <h5 className="heroText">On demand clusters<br/> for your Spark Applications</h5>
        <div className="heroButtons">
          <div style={{display: "inline-block", margin: 10}}>
            <Button class="btn btn-block" href="https://app.aidalabs.io/signup" size="lg" style={{color: "white", backgroundColor: "#00CC66", border: "none"}}>Get started for free</Button>
          </div>
          <div style={{display: "inline-block", margin: 10}}>
            <Button class="btn btn-block" href="#" size="lg" style={{color: "white", backgroundColor: "#00CC66", border: "none"}} >Explore the docs</Button>
          </div>  
        </div>
      </div>
    );
  }

}

export default Header;