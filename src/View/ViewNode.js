import React, { useState, useEffect } from "react";
import { champions as champPool, itemRef, champRef } from "../set4update/set4";

const Node = ({ champion, onDragOver, onDrop, onDragStart, position }) => {
  const [occupant, setOccupant] = useState({});
  const [tripleTrait, setTripleTrait] = useState("");
  const [border, setBorder] = useState("");

  useEffect(() => {
    (async () => {
      if (champion) {
        const data = champRef[champion.id];
        if (data.traits.length === 3) setTripleTrait("triple_trait");
        setOccupant(data);
        setBorder(`cost${data.cost}`);
      } else {
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
            className="hex__inner"
            style={
              champion
                ? {
                    backgroundImage: `url(${getChar(champion.id)})`,
                  }
                : null
            }
          />
        ) : null}
      </div>
      <div className="item-gallery">
        {champion && champion.items
          ? champion.items.map((item) => {
              let ref = itemRef[item].image;
              return (
                <img
                  className="equipped"
                  src={require(`../Assets/items/${ref}`)}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Node;
