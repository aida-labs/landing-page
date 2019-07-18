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
            <h5 className="heroText">Apache Spark clusters<br/> for your data applications.</h5>
            <h4 className="heroSubText">Spend more time programming and less time configuring. One simple command to deploy and access your jobs.</h4>

            <div className="heroButtons">
              <div style={{display: "inline-block", margin: "10px 20px 10px 0px"}}>
                <button className="btn-hero" ><a style={{color:"white", textDecoration: "none"}} href="https://app.aidalabs.io/signup">Get started for free</a></button>
              </div>
              <div style={{display: "inline-block", margin: "10px 20px 10px 0px"}}>
                <button className="btn-hero" ><a style={{color:"white", textDecoration: "none"}} href="https://www.aidalabs.io/docs" target="_blank">Explore the docs</a></button>
              </div>  
            </div>
          </div>
          <div className="heroRight">
            <img className="gif" src="/static/animation.svg" />
          </div>
        </div>
      </div>
    );
  }

}

export default Header;