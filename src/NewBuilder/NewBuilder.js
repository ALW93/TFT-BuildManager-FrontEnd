import React, { useState, useEffect } from "react";
import { SelectionPool, GUI, ItemPool } from "./Tools";
import Node from "./Node";
import { useSelector } from "react-redux";
import { items as itemPool, champions as champPool } from "../set4/set4";
import "./Builder.css";
import Synergies from "./Synergies";
import { createBoard } from "./BoardService";

const NewBuilder = () => {
  const user = useSelector((state) => state.authentication.user);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [actives, setActives] = useState({});

  const [pool, setPool] = useState(champPool);
  const [filter, setFilter] = useState({ cost: null, trait: null });
  const [synergies, setSynergies] = useState({});
  const [board, setBoard] = useState(() => {
    const object = {};
    const spaces = Array(28).fill(null);
    spaces.map((_, index) => {
      object[index] = null;
    });
    return object;
  });

  const submitBuild = () => {
    let reduced = Object.keys(board)
      .map((e, index) => {
        if (board[e]) {
          return { ...board[e], position: index };
        }
      })
      .filter((i) => i);
    const info = {
      authorId: user.id,
      grid: reduced,
      actives: actives,
      title: title,
      subtitle: subtitle,
    };

    createBoard(info);
  };

  // *** Grabs Synergies for Current Board ***
  useEffect(() => {
    const synergies = {};
    const team = Object.values(board)
      .map((e) => (e ? e.id : null))
      .filter((i) => i);
    champPool.map((champ) => {
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

  // *** Toggles Database Retrieval of Champion Pool ***
  useEffect(() => {
    (async () => {
      let data = champPool;
      if (filter.cost && !filter.trait) {
        return setPool(data.filter((e) => e.cost === parseInt(filter.cost)));
      }
      if (!filter.cost && filter.trait) {
        return setPool(data.filter((e) => e.trait.includes(filter.trait)));
      }
      if (filter.cost && filter.trait) {
        return setPool(
          data.filter(
            (e) =>
              e.cost === parseInt(filter.cost) && e.trait.includes(filter.trait)
          )
        );
      }
      setPool(data);
    })();
  }, [filter]);

  const onDragStart = (e, id, space) => {
    console.log("dragstart:", id, space);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("oldSpot", space);
    if (space && board[space].items) {
      e.dataTransfer.setData("items", board[space].items);
    }
    e.dataTransfer.setData("type", "champion");
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, position) => {
    const occupant = board[position];
    const oldSpot = ev.dataTransfer.getData("oldSpot");
    const id = ev.dataTransfer.getData("id");
    const items = ev.dataTransfer.getData("items");
    const itemId = ev.dataTransfer.getData("itemId");
    const type = ev.dataTransfer.getData("type");
    const newBoard = board;

    if (type === "champion") {
      if (board[oldSpot]) {
        const temp = board;
        temp[oldSpot] = null;
        setBoard({ ...temp });
      }
      if (items.length) {
        newBoard[position] = { id: id, items: items.split(",") };
      } else {
        newBoard[position] = { id: id };
      }
      if (occupant && oldSpot !== "null") {
        newBoard[oldSpot] = occupant;
      }
      setBoard({ ...newBoard });
    }

    if (type === "item") {
      if (board[position]) {
        if (newBoard[position]["items"]) {
          if (newBoard[position]["items"].length === 3) return;
          newBoard[position]["items"].push(itemId);
        } else {
          newBoard[position]["items"] = [itemId];
        }
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
      <div>
        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
      </div>
      <div>
        <label>Subtitle</label>
        <input
          type="text"
          onChange={(e) => setSubtitle(e.target.value)}
        ></input>
      </div>
      <div className="Builder__Container--Top">
        <div className="synergy-gallery">
          <Synergies
            data={synergies}
            setActives={setActives}
            actives={actives}
          />
        </div>
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
          <ItemPool items={itemPool} />
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
