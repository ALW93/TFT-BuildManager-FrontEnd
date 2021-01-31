import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { saveGuide } from "../store/actions/editor";

const Editor = ({ editRef, edit, guide }) => {
  console.log(edit, guide);

  useEffect(() => {
    if (guide) {
      console.log(guide);
      const editor = editRef.current.getEditor();
      editor.setContents(guide);
    }
  }, [guide]);

  return (
    <ReactQuill ref={editRef} readOnly={!edit} theme="bubble">
      <div style={{ width: "40vw", fontSize: "larger", height: "52vh" }}></div>
    </ReactQuill>
  );
};
export default Editor;
