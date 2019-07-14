import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import Router from "next/router";
import Vimeo from '@u-wave/react-vimeo';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {user, logout} = this.props;
    return(
      <div className="videoStyle">
        <h5 style={{marginBottom: 20}}>Deploy right from the command line</h5>
        <div>
          <Vimeo className="video" video={348061952}/>
        </div>
      </div>
    );
  }

}

export default Video;