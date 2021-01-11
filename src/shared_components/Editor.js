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
    <div>
      <h1>Quill Editor</h1>

      <ReactQuill
        // readOnly={true}
        // theme="bubble"
        value={content}
        onChange={updateContent}
      />
    </div>
  );
};
export default Editor;
