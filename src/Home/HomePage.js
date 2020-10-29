import React from "react";
import "./Home.css";
import LogoutButton from "./LogoutButton";
import mockup from "../Page-Mockups/Homepage.png";

function HomePage() {
  return (
    <div>
      <h1>Welcome to TFT Build Manager</h1>
      <LogoutButton />
      <div>
        <img src={mockup} />
      </div>
    </div>
  );
}

export default HomePage;
