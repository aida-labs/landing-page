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
            <h5 className="heroText">A modern data engineering platform.<br/> </h5>
            <h4 className="heroSubText">Simplify your workflows and save time managing Spark/Hadoop jobs. Integrates with AWS EMR and GCP Dataproc.</h4>

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
            <img className="gif" src="/static/aida_screenshot.png" />
          </div>
        </div>
      </div>
    );
  }

}

export default Header;