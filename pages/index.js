import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Video from "../components/Video";
import SignUp from "../components/SignUp";
import Button from "react-bootstrap/Button";
import "../static/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {initGA, logPageView} from '../utils/analytics';

export default class Index extends React.Component {

  componentDidMount(){
    if (!window.GA_INITIALIZED){
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
      <div className="landingPage">
        <div class="hero-bg"></div>
        <Header />
        <Hero />
        {/* <Video /> */}
        <SignUp />
        <Footer />

      </div>
    );
  }
}