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
          {/* <p style={{color:"white", fontSize: 13, paddingTop: 5}}>© 2019 Aida Labs, LLC. All rights reserved.</p> */}
          <p style={{color:"#272822", fontSize: 13, paddingTop: 5}}>© 2019 Aida Labs, LLC. All rights reserved.</p>
        </div>
        <div className="footerPages">
          {/*<hr style={{color: "#6CBEFB", backgroundColor: "#6CBEFB", height: 1, width: 250}}/>*/}
        {/*<img src="/static/icon_32.png" rel="preload" className="login-image" />*/}
          {/* <p style={{color: "white", margin: 0, padding: 0}}>Pages</p> */}
          <p style={{color: "#272822", margin: 0, padding: 0}}>Pages</p>
          <a href="https://www.aidalabs.io/docs" target="_blank" style={{color: "#999999", fontSize: 13}}>Docs</a><br/>
          <a href="https://discord.gg/p3UdqS8" target="_blank" style={{color: "#999999",fontSize: 13}}>Discord</a><br/>
          <a href="https://blog.aidalabs.io/" target="_blank" style={{color: "#999999",fontSize: 13}}>Blog</a>

        </div>
        <div className="footerResources">
          {/* <p style={{color: "white", margin: 0, padding: 0}}>Resources</p> */}
          <p style={{color: "#272822", margin: 0, padding: 0}}>Resources</p>
          <a href="/static/terms.pdf" target="_blank" style={{color: "#999999", fontSize: 13}}>Terms of Service</a><br/>
          <a href="/static/privacy.pdf" target="_blank" style={{color: "#999999",fontSize: 13}}>Privacy Policy</a>
        </div>
      </div>
    );
  }

}

export default Footer;