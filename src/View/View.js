import React, { useState, useEffect } from "react";
import { TFT_BASE, IMG_API } from "../config";
import ViewBoard from "./ViewBoard";
import "./View.css";

const View = ({ match }) => {
  const buildId = match.params.id;
  const [board, setBoard] = useState([]);
  const [author, setAuthor] = useState({});
  const [editor, showEditor] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${TFT_BASE}/boards/id/${buildId}`);
      const data = await response.json();
      setBoard(data);
      setAuthor(data.Creator);
    })();
  }, []);

  return (
    <div className="boardview__container">
      <div
        className="background"
        style={{ backgroundImage: `url(${IMG_API}/Pyke.jpg)` }}
      />

      <h2 className="glowHead">{board.title}</h2>
      <h3>Last Updated </h3>
      <h3>Created By {author.username}</h3>
      <div
        style={{
          fontSize: "0.9em",
        }}
      >
        <ViewBoard data={board.grid} />
      </div>
    </div>
  );
};
export default View;
