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

const GuideBuilder = ({ edit }) => {
  const [saved, initSave] = useState(false);
  const [builder, showBuilder] = useState(false);
  const [collection, showCollection] = useState(false);
  const boards = useSelector((state) => state.editor.boards);
  const boardCollection = useSelector((state) => state.info.boards);
  const editRef = createRef();
  const dispatch = useDispatch();

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
    console.log(JSON.stringify(saveContent));
  };

  return (
    <div className="flex w100">
      <Editor editRef={editRef} edit={edit} />
      <div>
        <Button variant="outlined" onClick={submitHandler}>
          Save
        </Button>
        <Button variant="outlined">New Board</Button>
      </div>

      {/* <div style={{ width: "50%" }}>
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
        ></Dialog>
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
      </div> */}
    </div>
  );
};
export default GuideBuilder;
