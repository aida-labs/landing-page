import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Video from "../components/Video";
import SignUp from "../components/SignUp";
import Button from "react-bootstrap/Button";
import "../static/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
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