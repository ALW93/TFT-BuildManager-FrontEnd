import React, { useState, useEffect } from "react";
import "./Builder.css";
import { TFT_API } from "../config";

const Node = ({ champion, onDragOver, onDrop, onDragStart, position }) => {
  const [occupant, setOccupant] = useState({});
  const [draggable, setDraggable] = useState(false);

  useEffect(() => {
    (async () => {
      if (champion) {
        const response = await fetch(`${TFT_API}/champions/${champion.id}`);
        const data = await response.json();
        setOccupant(data[0]);
        setDraggable(true);
      } else {
        setDraggable(false);
      }
    })();
  }, [champion]);

  const getChar = (charId) => {
    if (!charId) return;
    return require(`../Assets/champions/${charId}.png`);
  };

  return (
    <div
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, position)}
      className="hex-container"
    >
      <div className="trait-gallery">
        <div>Trait 1</div>
        <div>Trait 2</div>
      </div>
      <div className="hex">
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
