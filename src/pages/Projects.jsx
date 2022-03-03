import React from "react";
import todoListImg from "../images/todolistimg.png";
import walletImg from "../images/walletImage.png";
import memeGen from "../images/memeGen.png";
import onlineStore from "../images/onlineStore.png";
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
      <a href="https://mlnreduxwallet.vercel.app/">
        <div className="projectDiv">
          <img src={walletImg} alt="projectImg" />
          <p>React/Redux Expense Tracker</p>
        </div>
      </a>
      <a href="https://mlnmemegenerator.vercel.app/">
        <div className="projectDiv">
          <img src={memeGen} alt="projectImg" />
          <p>React Meme Generator</p>
        </div>
      </a>
      <a href="https://mlnonlinestore.vercel.app/">
        <div className="projectDiv">
          <img src={onlineStore} alt="projectImg" className="onlineStoreImg" />
          <p>React/Context API Mercado Livre Store</p>
        </div>
      </a>
    </div>
  );
}

export default Projects;
