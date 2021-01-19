import React from "react";
import { useSelector } from "react-redux";
import BoardAccordion from "../shared_components/BoardAccordion";

const BoardCollection = () => {
  const user = useSelector((state) => state.authentication.user);

  return (
    <div>
      <h1>Board Collection</h1>
      {user && <BoardAccordion boards={user.boards} type="collection" />}
    </div>
  );
};

export default BoardCollection;
