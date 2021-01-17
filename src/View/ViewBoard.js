import React, { useEffect, useState } from "react";
import ViewNode from "./ViewNode";

const init = () => {
  const object = {};
  const spaces = Array(28).fill(null);
  spaces.map((_, index) => {
    object[index] = null;
  });
  return object;
};

const ViewBoard = ({ data }) => {
  const [board, setBoard] = useState(init());
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    (async () => {
      let temp = init();
      data &&
        data.map((e) => {
          temp[e.position] = { id: e.id, items: e.items };
        });
      setBoard(temp);
    })();
  }, [data]);

  return (
    <div>
      <h1 onClick={() => setToggle((prev) => !prev)}>title</h1>
      {toggle ? (
        <div className="hexagon-gallery">
          {data &&
            Object.keys(board).map((node) => {
              return <ViewNode champion={board[node]} position={node} />;
            })}
        </div>
      ) : null}
    </div>
  );
};

export default ViewBoard;
