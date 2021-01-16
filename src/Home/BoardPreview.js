import React from "react";

const BoardPreview = ({ data }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "150px",
        border: "1px solid black",
        backgroundColor: "white",
      }}
    >
      {JSON.stringify(data)}
    </div>
  );
};

export default BoardPreview;
