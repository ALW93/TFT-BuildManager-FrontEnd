import React, { useState, useEffect } from "react";
import { TFT_API } from "../config";
import { SelectionPool, GUI } from "./Tools";
import Node from "./Node";
import "./Builder.css";

const NewBuilder = () => {
  const [pool, setPool] = useState([]);
  const [filter, setFilter] = useState({ cost: null, trait: null });
  const [board, setBoard] = useState(() => {
    const object = {};
    const spaces = Array(28).fill(null);
    spaces.map((_, index) => {
      object[index] = null;
    });
    return object;
  });

  // *** Toggles Database Retrieval of Champion Pool ***
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
      setPool(parsed);
    })();
  }, [filter]);

  const onDragStart = (e, id, space) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("oldSpot", space);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, position) => {
    const occupant = board[position];
    const oldSpot = ev.dataTransfer.getData("oldSpot");
    const id = ev.dataTransfer.getData("id");

    console.log("OnDrop", id, occupant, oldSpot);

    // if (board[oldSpot]) {
    //   const temp = board;
    //   temp[oldSpot] = null;
    //   setBoard({ ...temp });
    // }

    const newBoard = board;
    newBoard[position] = id;

    // if (occupant && oldSpot !== "null") {
    //   newBoard[oldSpot] = occupant;
    // }
    setBoard({ ...newBoard });
  };

  // *** Removes Champion from Board ***
  const onDropDelete = (e) => {
    const oldSpot = e.dataTransfer.getData("oldSpot");
    if (board[oldSpot]) {
      const temp = board;
      temp[oldSpot] = null;
      setBoard({ ...temp });
    }
  };

  return (
    <div className="Builder__Container">
      <h1>New Builder</h1>
      <div className="Builder__Container--Top">
        <div className="synergy-gallery">Traits</div>
        <div className="hexagon-gallery">
          {Object.keys(board).map((node) => {
            return (
              <Node
                champion={board[node]}
                onDragOver={onDragOver}
                onDragStart={onDragStart}
                onDrop={onDrop}
                position={node}
              />
            );
          })}
        </div>
        <div className="itemPool">Items</div>
      </div>
      <div className="Builder__Container--Bottom">
        <GUI filter={filter} setFilter={setFilter} />
        <SelectionPool
          champions={pool}
          onDragOver={onDragOver}
          onDropDelete={onDropDelete}
          onDragStart={onDragStart}
        />
      </div>
    </div>
  );
};

export default NewBuilder;
