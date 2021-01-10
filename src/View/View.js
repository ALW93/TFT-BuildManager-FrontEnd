import React, { useState, useEffect } from "react";
import { TFT_BASE } from "../config";
import ViewBoard from "./ViewBoard";

const View = ({ match }) => {
  const buildId = match.params.id;
  const [board, setBoard] = useState([]);
  const [author, setAuthor] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(`${TFT_BASE}/boards/id/${buildId}`);
      const data = await response.json();
      setBoard(data);
      setAuthor(data.Author);
    })();
  }, []);

  return (
    <div>
      <h1>Build Preview</h1>
      <ViewBoard board={board} author={author} />
    </div>
  );
};
export default View;
