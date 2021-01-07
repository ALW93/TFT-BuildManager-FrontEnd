import React from "react";
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

export const GUI = () => {
  return (
    <div>
      <h2>TOGGLE GUI</h2>
    </div>
  );
};
