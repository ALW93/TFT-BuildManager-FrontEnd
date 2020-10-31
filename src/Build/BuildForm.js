import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { champions } from "../Utility/game-data";
import { ICON_IMG_API } from "../config";
import "./BuildForm.css";

const BuildForm = (props) => {
  const [title, setTitle] = useState("");
  const [playstyle, setPlaystyle] = useState("Standard");
  const [notes, setNotes] = useState("");
  const [team, setTeam] = useState([]);
  const [items, setItems] = useState({});

  const handleSubmit = "";

  const updateTeam = () => {};

  const updateItem = (cb) => (e) => {
    return cb(e.target.value);
  };

  const handleSelect = (e) => {
    console.log(e.target.getAttribute("id"));
  };

  return (
    <div className="formContainer">
      <form>
        <TextField
          type="text"
          placeholder="Title"
          value={title}
          onChange={updateItem(setTitle)}
        />
        <Select
          placeholder="Choose Playstyle"
          id={playstyle}
          onChange={updateItem(setPlaystyle)}
        >
          <MenuItem value={"Standard"}>Standard</MenuItem>
          <MenuItem value="Slow Roll">Slow Roll</MenuItem>
          <MenuItem value="Re-Roll">Re-Roll</MenuItem>
          <MenuItem value="Fast 8">Fast 8</MenuItem>
        </Select>
        <div className="champion-grid-container">
          {Object.keys(champions).map((c) => (
            <img
              key={champions[c]}
              id={champions[c]}
              className="champIcon"
              src={`${ICON_IMG_API}${c}.png`}
              onClick={handleSelect}
            />
          ))}
        </div>
        <div className="team-grid-container">{JSON.stringify(team)}</div>
        <TextareaAutosize value={notes} onChange={updateItem(setNotes)} />
        <Button>Create Build</Button>
      </form>
    </div>
  );
};

export default BuildForm;
