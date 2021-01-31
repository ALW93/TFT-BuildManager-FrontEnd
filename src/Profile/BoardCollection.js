import React from "react";
import { useSelector } from "react-redux";
import BoardPreview from "../shared_components/BoardPreview";

const BoardCollection = () => {
  const boards = useSelector((state) => state.info.boards);

  return (
    <div>
      <h1 className="glowHead">Collection</h1>
      {Object.keys(boards).map((e) => (
        <BoardPreview id={e} data={boards[e]} />
      ))}
    </div>
  );
};

export default BoardCollection;
