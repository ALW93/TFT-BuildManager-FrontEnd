import React, { useState, useEffect } from "react";
import { TFT_BASE } from "../config";
import { DateTime } from "luxon";
import ViewBoard from "./ViewBoard";

const View = ({ match }) => {
  const buildId = match.params.id;
  const [board, setBoard] = useState([]);
  const [author, setAuthor] = useState({});
  const [editor, showEditor] = useState(true);

  const created = DateTime.fromISO(board.createdAt).toLocaleString(
    DateTime.DATE_MED
  );

  useEffect(() => {
    (async () => {
      const response = await fetch(`${TFT_BASE}/boards/id/${buildId}`);
      const data = await response.json();
      setBoard(data);
      setAuthor(data.Creator);
    })();
  }, []);

  return (
    <div>
      <h1>Build Preview</h1>
      <h1>Board</h1>
      <h2>{board.title}</h2>
      <h2>Votes {board.votes || 0}</h2>
      <h3>Last Updated {created}</h3>
      <h3>Created By {author.username}</h3>
      <ViewBoard data={board.grid} />
    </div>
  );
};
export default View;
