import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../store/actions/authentication";
import { TextField, Button } from "@material-ui/core";
import "./SignUpForm.css";
import art from "../Assets/favicon.png";

const SignUpForm = ({ createUser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    await createUser(newUser);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const hideForm = (e) => {
    //
  };

  return (
    <>
      <img src={art} alt="poro" className="penguin" />
      <div className="signupContainer">
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            placeholder="Username"
            value={username}
            onChange={updateUsername}
          />
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
            style={{
              backgroundColor: "#9f6c35",
              color: "white",
              marginTop: "15px",
            }}
            type="Submit"
          >
            Sign Up
          </Button>
        </form>
        <Button onClick={hideForm}>return to login</Button>
      </div>
    </>
  );
};

export default SignUpForm;
