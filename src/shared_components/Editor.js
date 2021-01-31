import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { saveGuide } from "../store/actions/editor";

const Editor = ({ save, initSave, editRef, type }) => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.editor.guide);

  useEffect(() => {
    if (content.length) {
      const editor = editRef.current.getEditor();
      editor.setContents(content);
    }
  }, []);

  useEffect(() => {
    if (save) {
      console.log("saving content");
      const quill = editRef.current.getEditor();
      const saveContent = quill.editor.delta.ops;
      dispatch(saveGuide(saveContent));
      initSave(false);
    }
  }, [save]);

  return (
    <ReactQuill ref={editRef}>
      <div style={{ width: "40vw", fontSize: "larger", height: "52vh" }}></div>
    </ReactQuill>
  );
};
export default Editor;
