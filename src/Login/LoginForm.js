import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, demoLogin } from "../store/actions/authentication";
import SignUpForm from "./SignUpForm";
import { TextField, Button } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";

const LoginForm = ({ login, demoLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleDemoLogin = async (e) => {
    demoLogin();
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="formBox">
      <h3>Log in to continue</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        <TextField
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <Button
          variant="contained"
          className="loginButton"
          style={{ backgroundColor: "#9f6c35", color: "white", margin: "8px" }}
          type="submit"
        >
          Login
        </Button>
      </form>
      <Button
        variant="contained"
        className="loginButton"
        style={{ backgroundColor: "#9f6c35", color: "white" }}
        onClick={handleDemoLogin}
      >
        Demo
      </Button>
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
        >
          Here!
        </Button>
      </div>
    </div>
  );
};

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  return (
    <LoginForm
      login={(email, password) => dispatch(login(email, password))}
      demoLogin={() => dispatch(demoLogin())}
    />
  );
};

export default LoginFormContainer;
