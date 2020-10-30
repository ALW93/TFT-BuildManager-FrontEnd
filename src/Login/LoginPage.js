import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";
import Logo from "../Assets/Logo.png";
import SideBar from "../shared_components/SideBar";

function LoginPage(props) {
  return (
    <main>
      <SideBar />
      <div>
        <img src={Logo} />
        <LoginForm />
      </div>
    </main>
  );
}

export default LoginPage;
