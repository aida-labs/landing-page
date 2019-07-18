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
      <div className="heroStyleBackground">
        <div className="heroStyle">
          <div className="heroLeft">
            <h5 className="heroText">On demand clusters<br/> for your Spark Applications</h5>
            <div className="heroButtons">
              <div style={{display: "inline-block", margin: 10}}>
                <button className="btn-hero" ><a style={{color:"white", textDecoration: "none"}} href="https://app.aidalabs.io/signup">Get started for free</a></button>
              </div>
              <div style={{display: "inline-block", margin: 10}}>
                <button className="btn-hero" ><a style={{color:"white", textDecoration: "none"}} href="https://www.aidalabs.io/docs" target="_blank">Explore the docs</a></button>
              </div>  
            </div>
          </div>
          <div className="heroRight">
            <img className="gif" src="/static/vid.gif" />
          </div>
        </div>
      </div>
    );
  }

}

export default Header;