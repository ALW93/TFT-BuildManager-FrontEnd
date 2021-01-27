import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../store/actions/authentication";
import { TextField, Button } from "@material-ui/core";
import "./SignUpForm.css";

const SignUpForm = ({ showSignUp }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    await dispatch(createUser(newUser));
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
      <div className="signupContainer">
        <h3>Sign Up</h3>
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
            Register
          </Button>
        </form>
        <Button onClick={() => showSignUp(false)}>return to login</Button>
      </div>
    </>
  );
};

export default SignUpForm;
