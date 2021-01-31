import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BoardPreview from "../shared_components/BoardPreview";

const BoardCollection = () => {
  const boards = useSelector((state) => state.info.boards);
  const user = useSelector((state) => state.authentication.user);
  const [shown, setShown] = useState(boards || null);

  useEffect(() => {
    setShown(boards);
  }, [boards]);

  const filterOwn = () => {
    const filtered = {};
    Object.keys(boards).forEach((e) => {
      if (boards[e].authorId === user.id) filtered[e] = boards[e];
    });
    setShown(filtered);
  };

  return (
    <div>
      <h1 className="glowHead">Collection</h1>
      <div className="flex">
        <button onClick={() => setShown(boards)}>Show All</button>
        <button onClick={filterOwn}>My Boards</button>
      </div>
      {Object.keys(shown).map((e) => (
        <BoardPreview id={e} data={shown[e]} />
      ))}
    </div>
  );
};

export default BoardCollection;
