import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { login, demoLogin } from "../store/actions/authentication";
import SignUpForm from "./SignUpForm";

function LoginForm(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleDemoLogin = async (e) => {
    dispatch(demoLogin());
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleDemoLogin}>Demo</button>
      <div>No Account? Sign Up Today!</div>
    </div>
  );
}

export default LoginForm;
