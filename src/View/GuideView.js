import React, { useEffect, useState, createRef } from "react";
import { TFT_BASE } from "../config";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const GuideView = ({ match, someRef }) => {
  const [data, setData] = useState({});
  const quill = createRef();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${TFT_BASE}/guides/id/${match.params.id}`);
      const info = await response.json();

      setData(info);
    })();
  }, []);

  useEffect(() => {
    const editor = quill.current.getEditor();
    editor.setContents(data.content);
  }, [data]);

  return (
    <div>
      <ReactQuill ref={quill} readOnly={true} theme="bubble">
        <div>"hello"</div>
      </ReactQuill>
      {JSON.stringify(data)}
    </div>
  );
};

export default GuideView;
