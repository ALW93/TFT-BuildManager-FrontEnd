import React, { useEffect, useState } from "react";
import { champions } from "../set4/set4";
import "./TestBuilder.css";
import Synergy from "./Synergy";

const TestBuilder = () => {
  const [synergies, setSynergies] = useState({});
  const [board, setBoard] = useState(() => {
    const object = {};
    const spaces = Array(28).fill(null);
    spaces.map((_, index) => {
      object[index] = null;
    });
    return object;
  });

  useEffect(() => {
    const synergies = {};
    const team = Object.values(board).filter((e) => e);
    champions.map((champ) => {
      if (team.includes(champ.championId)) {
        champ.traits.forEach((trait) => {
          if (!synergies[trait]) {
            synergies[trait] = 1;
          } else {
            synergies[trait]++;
          }
        });
      }
    });
    setSynergies(synergies);
  }, [board]);

  const onDragStart = (e, id, space, data) => {
    // console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("oldSpot", space);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, key) => {
    const occupant = board[key];
    const oldSpot = ev.dataTransfer.getData("oldSpot");
    const id = ev.dataTransfer.getData("id");

    if (board[oldSpot]) {
      const temp = board;
      temp[oldSpot] = null;
      setBoard({ ...temp });
    }

    const newBoard = board;
    newBoard[key] = id;

    if (occupant && oldSpot !== "null") {
      newBoard[oldSpot] = occupant;
    }
    setBoard({ ...newBoard });
  };

  // Fills Hexagon with Selected Champion Picture
  const getChar = (champion) => {
    if (!champion) return;
    return require(`../Assets/champions/${champion}.png`);
  };

  // Removes Champion from Board
  const onDropDelete = (e) => {
    const oldSpot = e.dataTransfer.getData("oldSpot");
    if (board[oldSpot]) {
      const temp = board;
      temp[oldSpot] = null;
      setBoard({ ...temp });
    }
  };

  return (
    <div>
      <Synergy synData={synergies} />
      <ul id="grid" className="clear">
        {Object.keys(board).map((b, index) => {
          return (
            <li>
              <div
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, b)}
                onDragStart={(e) => onDragStart(e, board[b], b)}
                draggable
                className="hexagon"
                style={{
                  backgroundImage: `url(${getChar(board[b])})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                }}
              ></div>
            </li>
          );
        })}
      </ul>
      <div
        style={{ border: "1px solid black" }}
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

export default TestBuilder;
