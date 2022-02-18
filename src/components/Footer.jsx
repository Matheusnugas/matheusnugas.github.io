import React from "react";
import reactIcon from "../images/react.png";
import cssIcon from "../images/css.png";
import htmlIcon from "../images/html.png";
import jsIcon from "../images/javascript.png";
import reduxIcon from "../images/redux.png";
import jestIcon from "../images/jest.png";
import githubIcon from "../images/Octocat.png";
import gitIcon from "../images/git.png";
import dockerIcon from "../images/docker.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <img src={htmlIcon} alt="reactIcon" />{" "}
          <span className="techSpan">HTML</span>
        </li>
        <li>
          <img src={cssIcon} alt="reactIcon" />
          <span className="techSpan">CSS</span>
        </li>
        <li>
          <img src={jsIcon} alt="reactIcon" />
          <span className="techSpan">JavaScript</span>
        </li>
        <li>
          <img src={reactIcon} alt="reactIcon" />
          <span className="techSpan">React</span>
        </li>
        <li>
          <img src={reduxIcon} alt="reactIcon" />
          <span className="techSpan">Redux</span>
        </li>
        <li>
          <img src={jestIcon} alt="reactIcon" />
          <span className="techSpan">Jest</span>
        </li>
        <li>
          <img src={gitIcon} alt="reactIcon" />
          <span className="techSpan">Git</span>
        </li>
        <li>
          <img src={githubIcon} alt="reactIcon" />
          <span className="techSpan">GitHub</span>
        </li>
        <li>
          <img src={dockerIcon} alt="reactIcon" />
          <span className="techSpan">Docker</span>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
