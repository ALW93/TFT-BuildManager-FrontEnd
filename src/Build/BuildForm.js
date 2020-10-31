import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const BuildForm = (props) => {
  const [title, setTitle] = useState("");
  const [playstyle, setPlaystyle] = useState("Standard");
  const [notes, setNotes] = useState("");
  const [team, setTeam] = useState([]);
  const [items, setItems] = useState({});

  const handleSubmit = "";

  const updateItem = (cb) => (e) => {
    return cb(e.target.value);
  };

  return (
    <>
      <form>
        <TextField
          type="text"
          placeholder="Title"
          value={title}
          onChange={updateItem(setTitle)}
        />
        <Select
          placeholder="Choose Playstyle"
          value={playstyle}
          onChange={updateItem(playstyle)}
        >
          <MenuItem value={"Standard"}>Standard</MenuItem>
          <MenuItem value="Slow Roll">Slow Roll</MenuItem>
          <MenuItem value="Re-Roll">Re-Roll</MenuItem>
          <MenuItem value="Fast 8">Fast 8</MenuItem>
        </Select>
        <TextareaAutosize />
        <Button>Create Build</Button>
      </form>
    </>
  );
};

export default BuildForm;
