import React from "react";
import { useSelector } from "react-redux";
import BoardAccordion from "../shared_components/BoardAccordion";

const BoardCollection = () => {
  const boards = useSelector((state) => state.info.boards);

  return (
    <div
      className="w100"
      style={{ padding: "0px 50px 0 50px", textAlign: "center" }}
    >
      <h1>Board Collection</h1>
      {boards && <BoardAccordion boards={boards} type="collection" />}
    </div>
  );
};

export default BoardCollection;
