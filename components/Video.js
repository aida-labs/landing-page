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
        <h4 style={{marginBottom: 20}}>Deploy right from the command line</h4>
        <Vimeo video={83065681} width={640} height={400}/>
      </div>
    );
  }

}

export default Video;