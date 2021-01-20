import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, removeBoard } from "../store/actions/board";

const ActionButtons = ({ user, boardId, data }) => {
  const [saved, setSaved] = useState(false);
  const [owner, setOwner] = useState(false);
  const dispatch = useDispatch();
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
          <button>Delete</button>
        </>
      ) : null}
    </div>
  );
};

export default ActionButtons;
