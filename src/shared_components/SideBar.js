import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import TristanaVid from "../Assets/sidebar/trist.mp4";

const SideBar = () => {
  return (
    <div className="sidebar">
      <video id="videoBG" autoPlay loop muted>
        <source src={TristanaVid} type="video/mp4" />
      </video>
    </div>
  );
};

export default SideBar;
