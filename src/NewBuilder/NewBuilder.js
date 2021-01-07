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

  return (
    <div className="Builder__Container">
      <h1>New Builder</h1>
      <div className="Builder__Container--Top">
        <div className="synergy-gallery">Traits</div>
        <div className="hexagon-gallery">
          {Object.keys(board).map((node) => {
            return <Node />;
          })}
        </div>
        <div className="itemPool">Items</div>
      </div>
      <div className="Builder__Container--Bottom">
        <GUI filter={filter} setFilter={setFilter} />
        <SelectionPool champions={pool} />
      </div>
    </div>
  );
};

export default NewBuilder;
