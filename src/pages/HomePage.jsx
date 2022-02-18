import React from "react";
import "./HomePage.css";
import heroImg from "../images/homePage.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="wrapper">
      <div className="introContainer">
        <p className="intro">
          <span className="hello">{"<"}Hi</span>, I'm{" "}
          <span classname="myName">Matheus Luz Nugas</span>!
        </p>
        <p>
          I'm a <b>Front-End Developer</b> studying at{" "}
          <Link
            to={{
              pathname: "https://www.betrybe.com",
            }}
            target="_blank"
          >
            <span className="trybeSpan">Trybe</span>
          </Link>
          <span className="htmlCloser">{" </>"}</span>
          <span className="blink">_</span>
          <div className="slogan">
            <p>On the road to Full-Stack 🚀</p>
            <br />
            <p>Always looking for interesting and engaging projects.</p>
          </div>
          <div className="links">
            <p>
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/matheusluznugas/",
                }}
                target="_blank"
              >
                <img className="linkedin" src={linkedin} alt="github" />
              </Link>
            </p>
            <p>
              <Link
                to={{
                  pathname: "https://github.com/Matheusnugas",
                }}
                target="_blank"
              >
                <img className="octocat" src={github} alt="github" />
              </Link>
            </p>
          </div>
        </p>
      </div>
      <div>
        <img src={heroImg} alt="codingImage" className="heroImage" />
      </div>
    </div>
  );
}

export default HomePage;
