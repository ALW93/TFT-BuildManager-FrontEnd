import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, removeBoard, deleteBoard } from "../store/actions/board";
import { useHistory } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const ActionButtons = ({ user, boardId, data, type }) => {
  const [saved, setSaved] = useState(false);
  const [owner, setOwner] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.authentication.token);
  const boards = useSelector((state) => state.info.boards);

  const saveBuild = async (e) => {
    e.preventDefault();
    console.log("saving");
    if (saved) {
      if (owner) {
        alert("This is your board! Please delete from Collection");
        return;
      }
      await dispatch(removeBoard(user.id, boardId, token));
      setSaved(false);
    } else {
      await dispatch(addBoard(user.id, boardId, token));
      setSaved(true);
    }
  };

  const deleteYourBoard = async (e) => {
    e.preventDefault();
    if (owner) {
      if (window.confirm(`Are you sure you want to delete ${data.title}?`)) {
        await dispatch(deleteBoard(boardId));
        history.push(`/profile/id/${user.id}/collection`);
      }
    } else {
      await dispatch(removeBoard(user.id, boardId, token));
    }
  };

  useEffect(() => {
    if (boards && boards[boardId]) {
      setSaved(true);
    }
    if (user && user.id === data.authorId) {
      setOwner(true);
    }
  }, [user]);
  return (
    <div>
      {type === "collection" ? (
        <>
          {owner ? (
            <>
              {" "}
              <button className="action b_green">EDIT</button>
              <button className="action b_red" onClick={deleteYourBoard}>
                DELETE
              </button>
            </>
          ) : (
            <button className="action b_red" onClick={deleteYourBoard}>
              REMOVE
            </button>
          )}
        </>
      ) : (
        <>
          {saved ? (
            <FavoriteIcon style={{ color: "red" }} onClick={saveBuild} />
          ) : (
            <FavoriteBorderIcon onClick={saveBuild} />
          )}
        </>
      )}
    </div>
  );
};

export default ActionButtons;
