import React, { useState } from "react";
import Editor from "../shared_components/Editor";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import NewBuilder from "../NewBuilder/NewBuilder";
import ViewBoard from "../View/ViewBoard";

const GuideBuilder = () => {
  const [saved, initSave] = useState(false);
  const [builder, showBuilder] = useState(false);
  const boards = useSelector((state) => state.guide.boards);
  const guide = useSelector((state) => state.guide.guide);
  const user = useSelector((state) => state.authentication.user);

  const setSave = (e) => {
    console.log("saving");
    e.preventDefault();
    initSave(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSave(e);
    console.log(guide, boards);
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "50%" }}>
        <h1>Guide Builder</h1>
        <button onClick={setSave}>Save</button>
        <button onClick={submitHandler}>Publish</button>
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
        {boards &&
          boards.map((e) => {
            return (
              <div
                draggable
                style={{ border: "2px solid blue", textAlign: "center" }}
              >
                <h3>{e.title}</h3>
                <ViewBoard data={e.grid} />
                <h4 style={{ marginTop: "-50px" }}>notes: {e.subtitle}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default GuideBuilder;
