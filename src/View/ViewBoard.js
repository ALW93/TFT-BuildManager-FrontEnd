import React, { useState } from "react";
import ViewNode from "./ViewNode";

const ViewBoard = ({ data }) => {
  return (
    <div className="Builder__Container--Top">
      <div className="hexagon-gallery">
        {data &&
          Object.keys(data).map((node) => {
            return <ViewNode champion={data[node]} position={node} />;
          })}
      </div>
    </div>
  );
};

export default ViewBoard;
