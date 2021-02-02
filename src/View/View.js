import React, { useState, useEffect } from "react";
import { TFT_BASE, IMG_API } from "../config";
import "./View.css";
import { DateTime } from "luxon";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import BoardCarousel from "./BoardCarousel";
import { Button } from "@material-ui/core";
import { deleteBoard } from "../store/actions/board";

const View = ({ match, location }) => {
  const buildId = match.params.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const [board, setBoard] = useState([]);
  const [author, setAuthor] = useState({});
  const [date, setDate] = useState("");
  const [owner, setOwner] = useState(false);
  const [editor, showEditor] = useState(false);
  const [cover, setCover] = useState("Azir");
  const [id, setId] = useState("");

  useEffect(() => {
    (async () => {
      const id = window.localStorage.getItem("USER_ID");
      const response = await fetch(`${TFT_BASE}/boards/id/${buildId}`);
      const data = await response.json();
      const parsedDate = new DateTime(data.createdAt).toLocaleString(
        DateTime.DATE_FULL
      );
      let coverChamp = data.grid[0].id;
      if (coverChamp.indexOf("TFT4_") > -1) coverChamp = coverChamp.slice(5);
      setId(buildId);
      setBoard(data);
      setOwner(parseInt(id) === data.authorId);
      setAuthor(data.Creator);
      setDate(parsedDate);
      setCover(coverChamp);
    })();
  }, [editor]);

  const delBoard = () => {
    if (window.confirm(`Are you sure you want to delete ${board.title}?`)) {
      dispatch(deleteBoard(board.id));
      history.push(`/profile/id/${owner}`);
    }
  };

  return (
    <div className="boardview__container">
      <div
        className="background"
        style={{ backgroundImage: `url(${IMG_API}/${cover}.jpg)` }}
      />
      <div className="boards">
        <h2 className="glowHead">{board.title}</h2>
        <h3 className="goldHead">Created By {author.username}</h3>
        <h4 className="goldHead">Last Updated {date}</h4>
        {owner ? (
          <>
            <Button variant="contained" onClick={() => showEditor(true)}>
              Edit Guide
            </Button>
            <Link to={`/board/id/${board.id}/new_sub`}>
              <Button variant="contained">Add Board</Button>
            </Link>
            <Button variant="contained" onClick={delBoard}>
              Delete Guide
            </Button>
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
            editor={editor}
            buildId={id}
            setBoard={setBoard}
            showEditor={showEditor}
          />
        </div>
      </div>
    </div>
  );
};
export default View;
