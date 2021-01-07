import React, { useState, useEffect } from "react";
import "./Builder.css";
import { TFT_API } from "../config";

const Node = ({ champion, onDragOver, onDrop, onDragStart, position }) => {
  const [occupant, setOccupant] = useState({});

  useEffect(() => {
    (async () => {
      if (champion) {
        const response = await fetch(`${TFT_API}/champions/${champion}`);
        const data = await response.json();
        console.log(data);
        setOccupant(data);
      }
    })();
  }, [champion]);

  const getChar = () => {
    return require(`${occupant.image}`);
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
        <div
          draggable
          onDragStart={(e) => onDragStart(e, champion, position)}
          className="hex__inner"
          style={
            occupant
              ? {
                  backgroundImage: `url(${require("../Assets/champions/TFT4_Ahri.png")})`,
                }
              : null
          }
        ></div>
      </div>
      <div className="item-gallery">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    </div>
  );
};
export default Node;
