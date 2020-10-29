import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { login, demoLogin } from "../store/actions/authentication";
import SignUpForm from "./SignUpForm";
import { showForm, hideForm } from "../store/actions/utility";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
      <div>
        No Account? Sign Up <button onClick={showForm}>Here!</button>
        <div>
          <SignUpForm hidden={formVisible} />
        </div>
      </div>
    </div>
  );
};

const LoginFormContainer = () => {
  const formVisible = useSelector(state => state.utility.formVisible);
  const dispatch = useDispatch();
  return (
    <LoginForm
      formVisible={formVisible}
      showForm={() => dispatch(showForm())}
      hideForm={() => dispatch(hideForm())}
      login={() => dispatch(login(email, password))}
      demoLogin={() => dispatch(demoLogin())}
    />
  )
}

export default LoginFormContainer;
