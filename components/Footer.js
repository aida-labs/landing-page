import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import Router from "next/router";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {user, logout} = this.props;
    return(
      <div className="footerStyle">
        <div className="footerLogo">
          <img width="40px" src="/static/icon_160.png" rel="preload" className="login-image" />
          <p style={{color:"white", fontSize: 13, paddingTop: 5}}>© 2019 Aida Labs, LLC. All rights reserved.</p>
        </div>
        <div className="footerStick">
          {/*<hr style={{color: "#6CBEFB", backgroundColor: "#6CBEFB", height: 1, width: 250}}/>*/}
        {/*<img src="/static/icon_32.png" rel="preload" className="login-image" />*/}
          <a style={{color: "#999999", margin: 10, fontSize: 13}}>Terms of Service</a>
          <a style={{color: "#999999", margin: 10, fontSize: 13}}>Privacy Policy</a>
        </div>
      </div>
    );
  }

}

export default Footer;