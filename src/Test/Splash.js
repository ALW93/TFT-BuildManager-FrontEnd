import React from "react";
import chonk from "../Assets/New/transparent_4.5.png";
import "./Splash.css";
import logo from "../Assets/Logo.png";
import { InteriorSwitch } from "../Utility/routes";
import calligraphyIcon from "../Assets/New/calligraphy.png";
import lanternIcon from "../Assets/New/lantern.png";
import boyIcon from "../Assets/New/boy.png";
import dragonIcon from "../Assets/New/dragon.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/authentication";

const Splash = () => {
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  const logoutApp = async () => {
    await dispatch(logout());
  };

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
            <img src={calligraphyIcon} className="navIcon" />
            <p className="navLinks">Builder</p>
          </div>
          <img class="login__logo" src={logo} />
          <div className="flex al_c">
            <img src={boyIcon} className="navIcon" />
            <p className="navLinks">Profile</p>
          </div>
          <div className="flex al_c">
            <img src={dragonIcon} className="navIcon" />
            <p className="navLinks" onClick={logoutApp}>
              Logout
            </p>
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
