import React from "react";
import Editor from "../shared_components/Editor";
import NewBuilder from "../NewBuilder/NewBuilder";

const GuideBuilder = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "50%" }}>
        <h1>Guide Builder</h1>
        <Editor />
      </div>
      <div style={{ width: "50%" }}>
        <h1>Board Tool</h1>
        <NewBuilder />
      </div>
    </div>
  );
};
export default GuideBuilder;
