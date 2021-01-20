import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, removeBoard, deleteBoard } from "../store/actions/board";
import { useHistory } from "react-router-dom";

const ActionButtons = ({ user, boardId, data }) => {
  const [saved, setSaved] = useState(false);
  const [owner, setOwner] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.authentication.token);

  const saveBuild = async () => {
    if (saved) {
      await dispatch(removeBoard(user.id, boardId, token));
      setSaved(false);
    } else {
      await dispatch(addBoard(user.id, boardId, token));
      setSaved(true);
    }
  };

  const deleteYourBoard = async () => {
    if (window.confirm(`Are you sure you want to delete ${data.title}?`)) {
      await dispatch(deleteBoard(boardId));
      history.push(`/profile/id/${user.id}/collection`);
    }
  };

  useEffect(() => {
    if (user.boards && user.boards[boardId]) {
      setSaved(true);
    }
    if (user.id === data.authorId) {
      setOwner(true);
    }
  }, [user]);
  return (
    <div>
      {user.id !== data.authorId ? (
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

      {owner ? (
        <>
          <button>Edit</button>
          <button onClick={deleteYourBoard}>Delete</button>
        </>
      ) : null}
    </div>
  );
};

export default ActionButtons;
