import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideForm } from "../store/actions/utility";
import { createUser } from "../store/actions/authentication";
import { TextField, Button } from "@material-ui/core";

const SignUpForm = ({ hideForm, createUser }) => {
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

  return (
    <>
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
          type="text"
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
    </>
  );
};

const SignUpFormContainer = () => {
  const formVisible = useSelector((state) => state.utility.formVisible);
  const dispatch = useDispatch();
  return (
    <SignUpForm
      formVisible={formVisible}
      hideForm={() => dispatch(hideForm())}
      createUser={(user) => dispatch(createUser(user))}
    />
  );
};

export default SignUpFormContainer;
