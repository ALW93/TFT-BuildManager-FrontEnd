import React from "react";
import Editor from "../shared_components/Editor";
import MiniBuilder from "../NewBuilder/MiniBuilder";

const GuideBuilder = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "50%" }}>
        <h1>Guide Builder</h1>
        <Editor />
      </div>
      <div style={{ width: "50%" }}>
        <h1>Board Tool</h1>
        <button>Create New Board</button>
        <button>Add From Collection</button>
      </div>
    </div>
  );
};
export default GuideBuilder;
