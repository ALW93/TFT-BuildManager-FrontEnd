import React, { useState, createRef } from "react";
import Editor from "../shared_components/Editor";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import NewBuilder from "../NewBuilder/NewBuilder";
import ViewBoard from "../View/ViewBoard";
import { TFT_BASE } from "../config";

const GuideBuilder = () => {
  const [saved, initSave] = useState(false);
  const [builder, showBuilder] = useState(false);
  const boards = useSelector((state) => state.editor.boards);
  const editRef = createRef();

  const setSave = (e) => {
    console.log("saving");
    e.preventDefault();
    initSave(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const quill = editRef.current.getEditor();
    const saveContent = quill.editor.delta.ops;
    const response = await fetch(`${TFT_BASE}/guides`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ guide: saveContent, title: "Some Title", id: 1 }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "50%" }}>
        <h1>Guide Builder</h1>
        <button onClick={setSave}>Save</button>
        <button onClick={submitHandler}>Publish</button>
        <Editor save={saved} initSave={initSave} editRef={editRef} />
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
