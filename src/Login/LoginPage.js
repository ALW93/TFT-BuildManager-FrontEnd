import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./Login.css";
import Logo from "../Assets/Logo.png";
import SignUpForm from "./SignUpForm";
import SideBar from "../shared_components/SideBar";
import { Button } from "@material-ui/core";

function LoginPage() {
  const [signup, showSignUp] = useState(false);

  return (
    <main className="Splash__Container">
      <SideBar />
      <div className="logIn__right">
        <img src={Logo} alt="logo" style={{ width: "30%" }} />
        <h1>build manager</h1>
        <div className="loginForm__div">
          {signup ? (
            <SignUpForm showSignUp={showSignUp} />
          ) : (
            <>
              <LoginForm />{" "}
              <div className="signUpPrompt">
                No Account? Sign Up
                <Button
                  style={{
                    height: "20px",
                    width: "30px",
                    color: "#9f6c35",
                    marginLeft: "-8px",
                    marginTop: "0.9px",
                  }}
                  onClick={() => showSignUp(true)}
                >
                  Here!
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
