import React from "react";
import { Link } from "react-router-dom";
import selfie from "../images/selfie.jpeg";
import "./About.css";

function About() {
  return (
    <div className="aboutWrapper">
      <div>
        <p>
          Hello visitor! My name is <span>Matheus</span>. I am a Brazil 🇧🇷 based
          front-end developer. Ever since I was a kid, I dreamed of leaving a
          mark in this world. I believe that with technology, it might just be
          possible to do that. Currently I'm working towards my goal of becoming
          a Full-Stack developer, and I'm studying at{" "}
          <Link
            to={{
              pathname: "https://www.betrybe.com",
            }}
            target="_blank"
          >
            <span className="trybeSpan">Trybe</span>
          </Link>
          , which is a web-development school with over 1500 hours of content. I
          am currently open for work opportunities!{" "}
          <Link to="/contact">
            <span className="contactSpan">Get in touch!</span>
          </Link>
        </p>
      </div>
      <div className="picWrapper">
        <img src={selfie} alt="myself" className="selfie" />
      </div>
    </div>
  );
}

export default About;
