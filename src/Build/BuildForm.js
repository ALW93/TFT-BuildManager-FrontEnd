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
  const [names, setNames] = useState([]);
  const [items, setItems] = useState({});

  const handleSubmit = "";

  const updateItem = (cb) => (e) => {
    return cb(e.target.value);
  };

  const addChampion = (championId, championName) => {
    setTeam((team) => [...team, championId]);
    setNames((names) => [...names, championName]);
  };

  const removeChampion = (championId, championName) => {
    const removeId = team.indexOf(championId);
    const newTeam = [...team.slice(0, removeId), ...team.slice(removeId + 1)];
    setTeam(newTeam);
    const champId = names.indexOf(championName);
    const newNames = [...names.slice(0, champId), ...names.slice(champId + 1)];
    setNames(newNames);
  };

  const handleSelect = (e) => {
    const championId = parseInt(e.target.getAttribute("id"));
    const championName = e.target.getAttribute("name");

    if (team.length === 10 || names.length === 10) {
      if (team.includes(championId)) {
        removeChampion(championId, championName);
        e.target.classList.remove("selected");
      } else {
        return;
      }
    }
    if (team.includes(championId)) {
      removeChampion(championId, championName);
      e.target.classList.remove("selected");
    } else {
      addChampion(championId, championName);
      e.target.classList.add("selected");
    }
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
              name={c}
              key={champions[c]}
              id={champions[c]}
              className="champIcon"
              src={`${ICON_IMG_API}${c}.png`}
              onClick={handleSelect}
            />
          ))}
        </div>
        <h1>Team</h1>
        <div className="team-grid-container">
          {names.map((n) => (
            <div key={n}>
              <img className="selectedIcon" src={`${ICON_IMG_API}${n}.png`} />
              <h5>{n}</h5>
            </div>
          ))}
        </div>
        <TextareaAutosize value={notes} onChange={updateItem(setNotes)} />
        <Button>Create Build</Button>
      </form>
    </div>
  );
};

export default BuildForm;
