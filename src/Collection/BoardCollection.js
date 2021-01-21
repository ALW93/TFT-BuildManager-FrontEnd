import React from "react";
import { useSelector } from "react-redux";
import BoardAccordion from "../shared_components/BoardAccordion";

const BoardCollection = ({ type, showBuilder }) => {
  const boards = useSelector((state) => state.info.boards);

  return (
    <div>
      <h1>Board Collection</h1>
      {boards && <BoardAccordion boards={boards} type="collection" />}
    </div>
  );
};

export default BoardCollection;
