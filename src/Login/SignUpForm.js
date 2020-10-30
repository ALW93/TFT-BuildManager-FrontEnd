import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authentication";
import { hideForm } from "../store/actions/utility";
import { createUser } from "../store/actions/user";

const SignUpForm = ({ hideForm, createUser }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { email, username, password };
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
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={updateUsername}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="Submit">Sign Up</button>
      </form>
      <button onClick={hideForm}>Go back to Log In</button>
    </div>
  );
};

const SignUpFormContainer = () => {
  const formVisible = useSelector((state) => state.utility.formVisible);
  const dispatch = useDispatch();
  return (
    <SignUpForm
      formVisible={formVisible}
      hideForm={() => dispatch(hideForm())}
      createUser={() => dispatch(createUser())}
    />
  );
};

export default SignUpFormContainer;
