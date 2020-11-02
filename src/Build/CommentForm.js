import React, { useState } from "react";
import { postComment } from "../Fetches/fetches";

const CommentForm = (props) => {
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const commentData = {
      userId: props.userId,
      buildId: props.buildId,
      message: message,
    };
    await postComment(commentData);
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Leave a comment..."
          onChange={updateMessage}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CommentForm;
