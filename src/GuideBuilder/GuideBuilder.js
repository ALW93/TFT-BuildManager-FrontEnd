import React, { useState, createRef } from "react";
import Editor from "../shared_components/Editor";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import NewBuilder from "../NewBuilder/NewBuilder";
import ViewBoard from "../View/ViewBoard";
import { TFT_BASE, IMG_API } from "../config";
import { addBoard } from "../store/actions/editor";
import "./GuideBuilder.css";
import { TextField, Button } from "@material-ui/core";

const GuideBuilder = () => {
  const [saved, initSave] = useState(false);
  const [builder, showBuilder] = useState(false);
  const [collection, showCollection] = useState(false);
  const [cover, setCover] = useState("Ahri");
  const boards = useSelector((state) => state.editor.boards);
  const boardCollection = useSelector((state) => state.info.boards);
  const editRef = createRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const setSave = (e) => {
    console.log("saving");
    e.preventDefault();
    initSave(true);
  };

  const addExisting = (data) => {
    dispatch(addBoard(data));
    showCollection(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const quill = editRef.current.getEditor();
    const saveContent = quill.editor.delta.ops;
    const title = document.getElementById("guideTitle");
    const token = window.localStorage.getItem("TOKEN_KEY");
    const response = await fetch(`${TFT_BASE}/guides`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        guide: saveContent,
        title: title.value || "untitled",
        id: 1,
        boards: boards,
      }),
    });
    const data = await response.json();
    history.push(`/guide/id/${data.id}`);
  };

  return (
    <div className="flex w100">
      <div
        style={{
          width: "400px",
          height: "100vh",
          border: "1px solid black",
          margin: "5px",
          backgroundImage: `url(${IMG_API}/${cover}.jpg)`,
          backgroundPosition: "center",
        }}
      />

      <div style={{ margin: "5px", width: "65%" }}>
        <TextField label="Title" type="text" id="guideTitle" />
        <div>
          <Button variant="outlined" onClick={setSave}>
            SAVE
          </Button>
          <Button variant="outlined" onClick={submitHandler}>
            PUBLISH
          </Button>
          <Button variant="outlined">Load Template</Button>
          <Button variant="outlined">Change Cover</Button>
        </div>
        <Editor save={saved} initSave={initSave} editRef={editRef} />
      </div>
      <div style={{ width: "50%" }}>
        <Button
          variant="outlined"
          className="action"
          onClick={() => showBuilder(true)}
        >
          Create New Board
        </Button>
        <Button
          variant="outlined"
          className="action"
          onClick={() => showCollection(true)}
        >
          Add From Collection
        </Button>
        <Dialog
          open={builder}
          maxWidth="fit-content"
          style={{ padding: "10px" }}
        >
          <NewBuilder type="add" showBuilder={showBuilder} />
        </Dialog>
        <Dialog open={collection} maxWidth={false} style={{ minWidth: "100%" }}>
          <div>
            {boardCollection &&
              Object.keys(boardCollection).map((e) => {
                return (
                  <div
                    className="hover_selection"
                    onClick={() =>
                      addExisting({ id: e, ...boardCollection[e] })
                    }
                  >
                    Select
                    <h3>{boardCollection[e].title}</h3>
                    <ViewBoard data={boardCollection[e].grid} />
                    <h4 style={{ marginTop: "-50px" }}>
                      notes: {boardCollection[e].subtitle}
                    </h4>
                  </div>
                );
              })}
          </div>
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
