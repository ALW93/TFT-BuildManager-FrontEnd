import React, { useState } from "react";
import Editor from "../shared_components/Editor";
import { Link } from "react-router-dom";

const GuideBuilder = () => {
  const [saved, initSave] = useState(false);

  const setSave = (e) => {
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
        <Link to="/guide-create/add">
          <button>Create New Board</button>
        </Link>
        <button>Add From Collection</button>
      </div>
    </div>
  );
};
export default GuideBuilder;
