import React from "react";
import todoListImg from "../images/todolistimg.png";
import "./Projects.css";
function Projects() {
  return (
    <div className="projectsWrapper">
      <a href="https://mlncontexttodolist.vercel.app/">
        <div className="projectDiv">
          <img src={todoListImg} alt="projectImg" />
          <p>React/Context API Todo-List</p>
        </div>
      </a>
    </div>
  );
}

export default Projects;
