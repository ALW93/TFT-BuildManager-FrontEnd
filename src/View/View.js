import React, { useState, useEffect } from "react";
import { TFT_BASE, IMG_API } from "../config";
import "./View.css";
import { DateTime } from "luxon";
import BoardCarousel from "./BoardCarousel";

const View = ({ match }) => {
  const buildId = match.params.id;
  const [board, setBoard] = useState([]);
  const [author, setAuthor] = useState({});
  const [date, setDate] = useState("");
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    (async () => {
      const id = window.localStorage.getItem("USER_ID");
      const response = await fetch(`${TFT_BASE}/boards/id/${buildId}`);
      const data = await response.json();
      const parsedDate = new DateTime(data.createdAt).toLocaleString(
        DateTime.DATE_FULL
      );
      setBoard(data);
      setOwner(parseInt(id) === data.authorId);
      setAuthor(data.Creator);
      setDate(parsedDate);
    })();
  }, []);

  return (
    <div className="boardview__container">
      <div
        className="background"
        style={{ backgroundImage: `url(${IMG_API}/Azir.jpg)` }}
      />
      <div className="boards">
        <h2 className="glowHead">{board.title}</h2>
        <h3 className="goldHead">Created By {author.username}</h3>
        <h4 className="goldHead">Last Updated {date}</h4>
        {owner ? (
          <>
            <button>Guide Editor</button>
            <button>Add a Board</button>
            <button>Delete</button>
          </>
        ) : null}
        <div
          style={{
            fontSize: "0.9em",
          }}
        >
          <BoardCarousel
            main={board.grid}
            subs={board.SubBoards}
            guide={board.guide}
            owner={owner}
          />
        </div>
      </div>
    </div>
  );
};
export default View;
