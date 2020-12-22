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

  const selector = (e) => {
    const parsed = JSON.parse(e.target.getAttribute("data"));
    console.log(parsed);
  };

  const test = (e) => {
    console.log(e.target.id);
  };

  const onDragStart = (e, id) => {
    console.log("dragstart:", id);
    const parsed = e.target.getAttribute("data");
    e.dataTransfer.setData("data", parsed);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, key) => {
    const info = ev.dataTransfer.getData("data");
    const parsed = JSON.parse(info);
    const championId = parsed.championId;
    console.log(key, championId);
    const newBoard = board;
    newBoard[key] = championId;
    setBoard({ ...newBoard });
  };

  const getChar = (id) => {
    console.log(board);
    if (!id) return;
    return require(`../Assets/champions/${id}.png`);
  };

  return (
    <div>
      <ul id="grid" className="clear">
        {Object.keys(board).map((b, index) => {
          console.log(b, board[b]);
          return (
            <li>
              <div
                onClick={test}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, b)}
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
              onDragStart={(e) => onDragStart(e, JSON.stringify(champion))}
              draggable
              onClick={selector}
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
