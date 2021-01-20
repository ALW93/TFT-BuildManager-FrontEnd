import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, removeBoard, deleteBoard } from "../store/actions/board";
import { useHistory } from "react-router-dom";

const ActionButtons = ({ user, boardId, data, type }) => {
  const [saved, setSaved] = useState(false);
  const [owner, setOwner] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.authentication.token);
  const boards = useSelector((state) => state.info.boards);

  const saveBuild = async () => {
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

  const deleteYourBoard = async () => {
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
    if (user.id === data.authorId) {
      setOwner(true);
    }
  }, [user]);
  return (
    <div>
      {type === "browser" ? (
        <>
          {saved ? (
            <button onClick={saveBuild} style={{ backgroundColor: "green" }}>
              Saved
            </button>
          ) : (
            <button onClick={saveBuild}>Save</button>
          )}
        </>
      ) : null}

      {data.feature_count ? (
        <button>Explore {data.feature_count} Guides</button>
      ) : null}

      {owner && type === "collection" ? (
        <>
          <button>Edit</button>
          <button onClick={deleteYourBoard}>Delete</button>
        </>
      ) : null}

      {type === "collection" && !owner ? (
        <button onClick={deleteYourBoard}>Remove from Collection</button>
      ) : null}
    </div>
  );
};

export default ActionButtons;
