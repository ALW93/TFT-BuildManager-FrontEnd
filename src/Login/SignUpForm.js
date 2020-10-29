import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SignUpForm = (props) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={updateUsername}
        />
      </form>
    </div>
  );
};

export default SignUpForm;
