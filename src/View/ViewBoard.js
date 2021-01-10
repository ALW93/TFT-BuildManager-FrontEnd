import React from "react";
import { DateTime } from "luxon";

const ViewBoard = ({ board, author }) => {
  const created = DateTime.fromISO(board.createdAt).toLocaleString(
    DateTime.DATE_MED
  );
  console.log(created);

  return (
    <div>
      <h1>Board</h1>
      <h2>{board.title}</h2>
      <h2>Votes {board.votes || 0}</h2>
      <h3>Last Updated {created}</h3>
      <h3>Created By {author.username}</h3>
      {board.guide || <button>Add a Guide</button>}
    </div>
  );
};

export default ViewBoard;
