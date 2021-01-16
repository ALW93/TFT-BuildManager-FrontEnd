import React, { useState } from "react";
import Editor from "../shared_components/Editor";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import NewBuilder from "../NewBuilder/NewBuilder";

const GuideBuilder = () => {
  const [saved, initSave] = useState(false);
  const [builder, showBuilder] = useState(false);

  const setSave = (e) => {
    console.log("saving");
    e.preventDefault();
    initSave(true);
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "50%" }}>
        <h1>Guide Builder</h1>
        <button onClick={setSave}>Save</button>
        <Editor save={saved} initSave={initSave} />
      </div>
      <div style={{ width: "50%" }}>
        <h1>Board Tool</h1>

        <button onClick={() => showBuilder(true)}>Create New Board</button>

        <button>Add From Collection</button>
        <Dialog
          open={builder}
          maxWidth="fit-content"
          style={{ padding: "10px" }}
        >
          <NewBuilder type="add" showBuilder={showBuilder} />
        </Dialog>
      </div>
    </div>
  );
};
export default GuideBuilder;
