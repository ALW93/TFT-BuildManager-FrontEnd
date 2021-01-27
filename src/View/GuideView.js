import React, { useEffect, useState, createRef } from "react";
import { TFT_BASE } from "../config";
import ReactQuill from "react-quill";
import ViewBoard from "./ViewBoard";
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
    <div className="flex" style={{ width: "100%" }}>
      <div style={{ width: "50%" }}>
        <h1>{data.title}</h1>
        <h2>By {data.Author && data.Author.username}</h2>
        <h3>Last Updated {data.updatedAt}</h3>
        <ReactQuill ref={quill} readOnly={true} theme="bubble">
          <div>"hello"</div>
        </ReactQuill>
      </div>
      <div>
        {data.Guide_Boards &&
          data.Guide_Boards.map((board) => {
            return (
              <div>
                <h4>{board.Board && board.Board.title}</h4>
                <ViewBoard data={board.Board && board.Board.grid} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GuideView;
