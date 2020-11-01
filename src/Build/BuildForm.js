import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { champions } from "../Utility/game-data";
import { ICON_IMG_API, IMG_API } from "../config";
import "./BuildForm.css";
import { createBuild } from "../Fetches/fetches";
import SideBar from "../shared_components/SideBar";

const BuildForm = (props) => {
  const [title, setTitle] = useState("");
  const [playstyle, setPlaystyle] = useState("Standard");
  const [notes, setNotes] = useState("");
  const [team, setTeam] = useState([]);
  const [names, setNames] = useState([]);
  const [carry, setCarry] = useState([]);

  const authorId = window.localStorage.getItem("USER_ID");

  const generateTeamData = () => {
    const initial = team.map((charId) => {
      return { championId: charId, carry: false };
    });

    initial.forEach((char) => {
      if (carry.includes(char.championId)) {
        char.carry = true;
      }
    });

    return initial;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBuild = {
      title: title,
      playstyle: playstyle,
      notes: notes,
      authorId: authorId,
      team: await generateTeamData(),
    };
    console.log(newBuild);
    await createBuild(newBuild);
  };

  const updateItem = (cb) => (e) => {
    return cb(e.target.value);
  };

  const handleCarrySelect = (e) => {
    const carryId = e.target.getAttribute("id");
    const id = parseInt(carryId);
    if (carry.includes(id)) {
      removeCarry(carryId);
      e.target.classList.remove("selected-carry");
    } else {
      addCarry(carryId);
      e.target.classList.add("selected-carry");
    }
  };

  const addCarry = (carryId) => {
    const id = parseInt(carryId);
    setCarry((carry) => [...carry, id]);
  };

  const removeCarry = (carryId) => {
    const id = parseInt(carryId);
    const index = carry.indexOf(id);
    const newState = [...carry.slice(0, index), ...carry.slice(index + 1)];
    setCarry(newState);
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

  return (
    <div className="mainFormContainer">
      <SideBar />
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="form_left">
            <h1>Roster</h1>

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
          </div>

          <div className="team__details">
            <h1>Selected Team</h1>
            <div className="team-grid-container">
              {names.map((n) => (
                <div key={n} onClick={handleCarrySelect}>
                  <div
                    id={champions[n]}
                    className="selectedIcon"
                    style={{
                      backgroundImage: `url("${IMG_API}/${n}.jpg")`,
                    }}
                  />
                  <h4 className="champ__name">{n}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="form_right">
            <div className="build__details">
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
                <MenuItem value="Standard">Standard</MenuItem>
                <MenuItem value="Slow Roll">Slow Roll</MenuItem>
                <MenuItem value="Re-Roll">Re-Roll</MenuItem>
                <MenuItem value="Fast 8">Fast 8</MenuItem>
              </Select>
              <TextareaAutosize value={notes} onChange={updateItem(setNotes)} />
              <Button type="submit">Create Build</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuildForm;
