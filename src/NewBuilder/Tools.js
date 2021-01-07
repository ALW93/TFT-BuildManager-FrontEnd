import React from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import "./Builder.css";

export const SelectionPool = ({ champions }) => {
  return (
    <div>
      <h2>Selector</h2>
      <div className="character__selection">
        {champions.map((champion) => {
          return (
            <img
              draggable
              className={`border${champion.cost}`}
              src={require(`../Assets/champions/${champion.championId}.png`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export const GUI = ({ filter, setFilter }) => {
  const costs = {
    None: "",
    One: "1",
    Two: "2",
    Three: "3",
    Four: "4",
    Five: "5",
  };

  const costHandler = (e) => setFilter({ ...filter, cost: e.target.value });
  const traitHandler = (e) => setFilter({ ...filter, trait: e.target.value });

  return (
    <div>
      <h2>TOGGLE GUI</h2>
      <div>
        {Object.keys(costs).map((cost) => {
          return (
            <>
              <label>{cost}</label>
              <Radio
                checked={filter.cost === costs[cost]}
                onChange={costHandler}
                value={costs[cost]}
                name="radio-button-demo"
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
