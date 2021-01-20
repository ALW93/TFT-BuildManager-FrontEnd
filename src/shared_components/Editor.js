import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { saveGuide } from "../store/actions/editor";

const Editor = ({ save, initSave, editRef }) => {
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
    <div style={{ width: "100%" }}>
      <ReactQuill
        // readOnly={true}
        // theme="bubble"

        ref={editRef}
        style={{
          width: "inherit",
          height: "71vh",
        }}
      >
        <div
          style={{ width: "100%", fontSize: "larger", height: "100%" }}
        ></div>
      </ReactQuill>
      <button>Submit</button>
    </div>
  );
};
export default Editor;
