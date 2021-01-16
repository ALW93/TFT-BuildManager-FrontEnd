import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const Delta = Quill.import("delta");

const Editor = () => {
  const [content, setContent] = useState("");
  const [data, setData] = useState("");

  const updateContent = (e) => {
    setContent(e);
    setData(new Delta().insert(e));
  };

  return (
    <div style={{ width: "100%" }}>
      <ReactQuill
        // readOnly={true}
        // theme="bubble"
        style={{
          width: "inherit",
          height: "71vh",
        }}
      >
        <div
          onChange={updateContent}
          style={{ width: "100%", fontSize: "larger", height: "100%" }}
        >
          Area
        </div>
      </ReactQuill>
    </div>
  );
};
export default Editor;
