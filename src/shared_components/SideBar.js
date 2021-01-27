import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <video id="videoBG" autoPlay loop muted>
        <source
          src="https://tft-buildmanager.s3.amazonaws.com/Dragon+Trainer+Tristana+_+Login+Screen+-+League+of+Legends.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default SideBar;
