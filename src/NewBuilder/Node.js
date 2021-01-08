import React, { useState, useEffect } from "react";
import "./Builder.css";
import { TFT_API } from "../config";

const Node = ({ champion, onDragOver, onDrop, onDragStart, position }) => {
  const [occupant, setOccupant] = useState({});
  const [tripleTrait, setTripleTrait] = useState("");
  const [draggable, setDraggable] = useState(false);
  const [border, setBorder] = useState("");

  useEffect(() => {
    (async () => {
      if (champion) {
        const response = await fetch(`${TFT_API}/champions/${champion.id}`);
        const data = await response.json();
        if (data[0].traits.length === 3) setTripleTrait("triple_trait");
        setOccupant(data[0]);
        setBorder(`cost${data[0].cost}`);
        setDraggable(true);
      } else {
        setDraggable(false);
        setBorder("");
      }
    })();
  }, [champion]);

  const getChar = (charId) => {
    if (!charId) return;
    return require(`../Assets/champions/${charId}.png`);
  };

  const getTrait = (trait) => {
    if (trait.indexOf("Set4_") > -1) {
      return trait.split("").splice(5).join("").toLowerCase();
    } else {
      return trait.toLowerCase();
    }
  };

  return (
    <div
      onDragOver={onDragOver}
      onDrop={(e) => {
        onDrop(e, position);
        setTripleTrait("");
      }}
      className="hex-container"
    >
      <div className="trait-gallery">
        {champion && occupant.traits
          ? occupant.traits.map((trait) => {
              return (
                <div className={`traits ${tripleTrait}`}>
                  <img
                    src={require(`../Assets/traits/${getTrait(trait)}.svg`)}
                  />
                </div>
              );
            })
          : null}
      </div>
      <div className={`hex ${border}`}>
        {occupant ? (
          <div
            draggable={draggable}
            onDragStart={(e) => onDragStart(e, champion.id, position)}
            className="hex__inner"
            style={
              champion
                ? {
                    backgroundImage: `url(${getChar(occupant.championId)})`,
                  }
                : null
            }
          />
        ) : null}
      </div>
      <div className="item-gallery">
        {champion && champion.items
          ? champion.items.map((item) => {
              return (
                <img
                  className="equipped"
                  src={require(`../Assets/items/${item}`)}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Node;
