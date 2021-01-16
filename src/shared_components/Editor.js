import React, { useEffect, createRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { saveGuide } from "../store/actions/guide";

const Delta = Quill.import("delta");

const Editor = ({ save, initSave }) => {
  const dispatch = useDispatch();
  const editRef = createRef();
  const [value, setValue] = useState("");
  const content = useSelector((state) => state.guide.guide);

  useEffect(() => {
    if (content.length) {
      console.log("CONTENTS", content);
      const editor = editRef.current.getEditor();
      editor.setContents(content);
    } else {
      console.log("no save data");
    }
  }, [content]);

  useEffect(() => {
    if (save) {
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
          defaultValue={value}
          style={{ width: "100%", fontSize: "larger", height: "100%" }}
        ></div>
      </ReactQuill>
    </div>
  );
};
export default Editor;
