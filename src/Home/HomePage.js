import React from "react";
import "./Home.css";
import LogoutButton from "./LogoutButton";
import mockup from "../Page-Mockups/Homepage.png";
import NavBar from "../shared_components/NavBar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <LogoutButton />
    </div>
  );
}

export default HomePage;
