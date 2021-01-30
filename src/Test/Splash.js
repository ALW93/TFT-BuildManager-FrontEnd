import React from "react";
import chonk from "../Assets/New/transparent_4.5.png";
import "./Splash.css";
import logo from "../Assets/Logo.png";
import { InteriorSwitch } from "../Utility/routes";
import lanternIcon from "../Assets/New/lantern.png";

const Splash = () => {
  return (
    <div class="splash__background">
      <div class="login__container">
        <div
          class="flex"
          style={{
            justifyContent: "space-between",
            width: "90%",
            margin: "auto",
          }}
        >
          <div className="flex al_c">
            <img src={lanternIcon} className="navIcon" />
            <p className="navLinks">Browse Builds</p>
          </div>
          <div className="flex al_c">
            <img src={lanternIcon} className="navIcon" />
            <p className="navLinks">Builder</p>
          </div>
          <img class="login__logo" src={logo} />
          <div className="flex al_c">
            <img src={lanternIcon} className="navIcon" />
            <p className="navLinks">Profile</p>
          </div>
          <div className="flex al_c">
            <img src={lanternIcon} className="navIcon" />
            <p className="navLinks">Logout</p>
          </div>
        </div>
        <div className="login__interior">
          <InteriorSwitch />
        </div>
      </div>
      <img class="avatar" src={chonk} />
    </div>
  );
};

export default Splash;
