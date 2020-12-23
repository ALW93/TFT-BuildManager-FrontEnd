import React, { useState } from "react";
import { champions } from "../set4/set4";
import "./TestBuilder.css";

const TestBuilder = () => {
  const [board, setBoard] = useState(() => {
    const object = {};
    const spaces = Array(28).fill(null);
    spaces.map((space, index) => {
      object[index] = null;
    });
    return object;
  });

  const onDragStart = (e, id) => {
    // console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);
  };

  const onBoardStart = (e, id, space) => {
    console.log("boardDrag:", id);
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

    if (occupant) {
      newBoard[oldSpot] = occupant;
    }
    setBoard({ ...newBoard });
    console.log(board);
  };

  const getChar = (champion) => {
    if (!champion) return;
    return require(`../Assets/champions/${champion}.png`);
  };

  return (
    <div>
      <ul id="grid" className="clear">
        {Object.keys(board).map((b, index) => {
          return (
            <li>
              <div
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, b)}
                onDragStart={(e) => onBoardStart(e, board[b], b)}
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
      <div>
        {champions.map((champion) => {
          return (
            <img
              data={JSON.stringify(champion)}
              onDragStart={(e) => onDragStart(e, champion.championId)}
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
