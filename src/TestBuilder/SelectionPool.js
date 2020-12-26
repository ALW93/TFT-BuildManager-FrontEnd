import React, { useState, useEffect } from "react";
import { champions, traits } from "../set4/set4";
import "./TestBuilder.css";

const SelectionPool = ({ onDragOver, onDropDelete, onDragStart }) => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    //
  }, [filter]);

  return (
    <div>
      <div
        className="character__selection"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDropDelete(e)}
      >
        {champions.map((champion) => {
          console.log(champion);
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
