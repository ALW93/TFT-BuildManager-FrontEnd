import React, { useState, useEffect } from "react";
import { TFT_API } from "../config";
import { SelectionPool, GUI, ItemPool } from "./Tools";
import Node from "./Node";
import "./Builder.css";
import { createBoard } from "./BoardService";

const NewBuilder = () => {
  const [pool, setPool] = useState([]);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({ cost: null, trait: null });
  const [board, setBoard] = useState(() => {
    const object = {};
    const spaces = Array(28).fill(null);
    spaces.map((_, index) => {
      object[index] = null;
    });
    return object;
  });

  const submitBuild = () => {
    console.log(JSON.stringify(board));
    const info = { board: board, authorId: 1, title: "test" };
    createBoard(info);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`${TFT_API}/items`);
      const data = await response.json();
      setItems(data);
    })();
  }, []);

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
    e.dataTransfer.setData("type", "champion");
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, position) => {
    const occupant = board[position];
    const oldSpot = ev.dataTransfer.getData("oldSpot");
    const id = ev.dataTransfer.getData("id");
    const itemId = ev.dataTransfer.getData("itemId");
    const type = ev.dataTransfer.getData("type");
    const newBoard = board;

    if (type === "champion") {
      if (board[oldSpot]) {
        const temp = board;
        temp[oldSpot] = null;
        setBoard({ ...temp });
      }
      newBoard[position] = { id: id };
      if (occupant && oldSpot !== "null") {
        newBoard[oldSpot] = occupant;
      }
      setBoard({ ...newBoard });
    }

    if (type === "item") {
      console.log("dropping an item", itemId);
      if (board[position]) {
        if (newBoard[position]["items"]) {
          if (newBoard[position]["items"].length === 3) return;
          newBoard[position]["items"].push(itemId);
        } else {
          newBoard[position]["items"] = [itemId];
        }
        // newBoard[position]["items"] = [itemId];
        setBoard({ ...newBoard });
      } else {
        console.log("no champion"); // TODO: Alert User No Champion
      }
    }
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
        <div className="itemPool">
          <ItemPool items={items} />
        </div>
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
      <button onClick={submitBuild}>Submit</button>
    </div>
  );
};

export default NewBuilder;
