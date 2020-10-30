import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";
import Logo from "../Assets/Logo.png";
import SideBar from "../shared_components/SideBar";

function LoginPage(props) {
  return (
    <main>
      <SideBar />
      <div className="logIn__right">
        <img src={Logo} />
        <h1>build manager</h1>
        <div className="loginForm__div">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
