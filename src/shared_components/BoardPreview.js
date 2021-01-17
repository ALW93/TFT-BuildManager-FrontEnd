import React, { useState } from "react";
import ViewBoard from "../View/ViewBoard";

const BoardPreview = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        onClick={() => setToggle((prev) => !prev)}
        style={{
          width: "100%",
          height: "150px",
          border: "1px solid black",
          backgroundColor: "white",
        }}
      >
        {JSON.stringify(data)}
      </div>
      {toggle ? <ViewBoard data={data.grid} /> : null}
    </>
  );
};

export default BoardPreview;
