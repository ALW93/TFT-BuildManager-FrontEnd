import React, { useState, useEffect } from "react";
import { activeTraits } from "../set4update/set4";
import { orderedSynergies } from "./BoardService";
import { displayActive } from "./Actives";

const Synergies = ({ data, actives, setActives }) => {
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    let obj = {};
    Object.keys(data).forEach((syn) => {
      let activated = data[syn];
      let min = Math.min(...activeTraits[syn]);
      if (activated >= min) {
        let compare = activeTraits[syn];
        for (let i = 0; i <= compare.length - 1; i++) {
          if (activated < compare[i]) {
            return (obj[syn] = compare[i - 1]);
          }
          if (activated === compare[compare.length - 1]) {
            return (obj[syn] = compare[compare.length - 1]);
          }
        }
      }
    });
    setActives(obj);
    console.log(obj);
    setSorted(orderedSynergies(obj));
  }, [data]);

  return (
    <div>
      {actives &&
        Object.keys(actives).map((e) => {
          console.log(sorted);
          let trait = e.toLowerCase();
          if (trait.includes("set4_")) trait = trait.replace("set4_", "");
          return (
            <div
              className="flex"
              style={{
                width: "80%",
                height: "3em",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <img
                src={`${require(`../Assets/traits/${trait}.svg`)}`}
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "5px",
                  filter: "drop-shadow(16px 16px 20px blue) invert(85%)",
                }}
              />

              <h3 style={{ marginRight: "5px" }} className="glowHead">
                {trait}
              </h3>
              {displayActive(actives[e], activeTraits[e])}
            </div>
          );
        })}
    </div>
  );
};

export default Synergies;
