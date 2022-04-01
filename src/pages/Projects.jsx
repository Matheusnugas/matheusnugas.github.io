import React from "react";
import adviceGenerator from "../images/adviceGenerator.png";
import countriesAPI from "../images/countriesAPI.png";
import memeGen from "../images/memeGen.png";
import onlineStore from "../images/onlineStore.png";
import spaceTourism from "../images/spaceTourism.png";
import todoListImg from "../images/todolistimg.png";
import todoListV2 from "../images/todoListv2.png";
import walletImg from "../images/walletImage.png";
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
      <a href="https://mlntodolistv2.vercel.app/">
        <div className="projectDiv">
          <img src={todoListV2} alt="projectImg" />
          <p>React/Context API Todo-List V2 </p>
        </div>
      </a>
      <a href="https://mlnspacetourism.vercel.app//">
        <div className="projectDiv">
          <img src={spaceTourism} alt="projectImg" />
          <p>React Space Tourism Page</p>
        </div>
      </a>
      <a href="https://mlnreduxwallet.vercel.app/">
        <div className="projectDiv">
          <img src={walletImg} alt="projectImg" />
          <p>React/Redux Expense Tracker</p>
        </div>
      </a>
      <a href="https://mlncountriesapp.vercel.app/">
        <div className="projectDiv">
          <img src={countriesAPI} alt="projectImg" />
          <p>React Countries API V3 App</p>
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
      <a href="https://mlnadvicegenerator.vercel.app/">
        <div className="projectDiv">
          <img
            src={adviceGenerator}
            alt="projectImg"
            className="adviceGenImg"
          />
          <p>React Advice Generator</p>
        </div>
      </a>
    </div>
  );
}

export default Projects;
