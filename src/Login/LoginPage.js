import React from "react";
import LoginForm from "./LoginForm";
import mockup from "../Page-Mockups/Login-Splash.png";

function LoginPage(props) {
  return (
    <>
      <h1>Please Log In!</h1>
      <LoginForm />
      <div>
        <img src={mockup} />
      </div>
    </>
  );
}

export default LoginPage;
