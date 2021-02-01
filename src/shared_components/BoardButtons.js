import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, removeBoard } from "../store/actions/board";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const ActionButtons = ({ user, boardId, data }) => {
  const [saved, setSaved] = useState(false);
  const [owner, setOwner] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.info.boards);

  const saveBuild = async (e) => {
    e.preventDefault();
    if (saved) {
      if (owner) {
        alert("This is your board! Please delete from Collection");
        return;
      }
      await dispatch(removeBoard(user.id, boardId));
      setSaved(false);
    } else {
      await dispatch(addBoard(user.id, boardId, data));
      setSaved(true);
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
      {saved ? (
        <FavoriteIcon style={{ color: "red" }} onClick={saveBuild} />
      ) : (
        <FavoriteBorderIcon onClick={saveBuild} />
      )}
    </div>
  );
};

export default ActionButtons;
