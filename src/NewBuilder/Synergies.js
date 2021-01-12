import React, { useState, useEffect } from "react";
import { activeTraits } from "../set4/set4";

const Synergies = ({ data }) => {
  const [actives, setActives] = useState({});
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
    console.log(obj);
    setActives(obj);
  }, [data]);

  return (
    <div>
      <h1>Actives</h1>
      {JSON.stringify(actives)}
      <h1>Synergies</h1>
      {data &&
        Object.keys(data).map((syn) => {
          let synergy = syn.toLowerCase();
          if (synergy.includes("set4_")) {
            let newSyn = synergy.replace("set4_", "");
            synergy = newSyn;
          }
          return (
            <div>
              <img
                src={require(`../Assets/traits/${synergy}.svg`)}
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
              {synergy}
              || {actives[syn]} ||
              {activeTraits[syn]}
            </div>
          );
        })}
    </div>
  );
};

export default Synergies;
