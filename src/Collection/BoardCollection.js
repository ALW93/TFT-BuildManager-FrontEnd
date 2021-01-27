import React from "react";
import { useSelector } from "react-redux";
import BoardAccordion from "../shared_components/BoardAccordion";
import GuidePreview from "../shared_components/GuidePreview";

const BoardCollection = () => {
  const boards = useSelector((state) => state.info.boards);
  const guides = useSelector((state) => state.info.guides);
  return (
    <div className="flex">
      <div
        style={{
          padding: "0px 50px 0 50px",
          textAlign: "center",
          width: "60%",
        }}
      >
        <h1>Boards</h1>
        {boards && <BoardAccordion boards={boards} type="collection" />}
      </div>
      <div>
        <h1>Guides</h1>
        <GuidePreview guides={guides} />
      </div>
    </div>
  );
};

export default BoardCollection;
