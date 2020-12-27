import React, { useState, useEffect } from "react";
import { TFT_API } from "../config";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import "./TestBuilder.css";

const SelectionPool = ({ onDragOver, onDropDelete, onDragStart }) => {
  const [champions, setChampions] = useState([]);
  const [filter, setFilter] = useState({ cost: null, trait: null });

  useEffect(() => {
    (async () => {
      let data;
      if (filter.cost && !filter.trait) {
        data = await fetch(`${TFT_API}/champions/filter/cost/${filter.cost}`);
      }
      if (!filter.cost && filter.trait) {
        data = await fetch(`${TFT_API}/champions/filter/trait/${filter.trait}`);
      }
      if (filter.cost && filter.trait) {
        data = await fetch(
          `${TFT_API}/champions/filter/cost/${filter.cost}/trait/${filter.trait}`
        );
      }
      if (!filter.cost && !filter.trait) {
        data = await fetch(`${TFT_API}/champions`);
      }
      const parsed = await data.json();
      setChampions(parsed);
    })();
  }, [filter]);

  const costHandler = (e) => setFilter({ ...filter, cost: e.target.value });
  const traitHandler = (e) => setFilter({ ...filter, trait: e.target.value });

  return (
    <div>
      <RadioGroup value={filter.cost} onChange={costHandler}>
        <FormControlLabel value="" control={<Radio />} label="None" />
        <FormControlLabel value="1" control={<Radio />} label="One" />
        <FormControlLabel value="2" control={<Radio />} label="Two" />
        <FormControlLabel value="3" control={<Radio />} label="Three" />
        <FormControlLabel value="4" control={<Radio />} label="Four" />
        <FormControlLabel value="5" control={<Radio />} label="Five" />
      </RadioGroup>
      <RadioGroup value={filter.trait} onChange={traitHandler}></RadioGroup>
      <div
        className="character__selection"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDropDelete(e)}
      >
        {champions.map((champion) => {
          return (
            <img
              onDragStart={(e) => onDragStart(e, champion.championId, null)}
              draggable
              src={require(`../Assets/champions/${champion.championId}.png`)}
              style={{ width: "64px" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectionPool;
