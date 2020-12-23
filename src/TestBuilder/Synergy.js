import React, { useEffect, useState } from "react";
import { activeTraits } from "../set4/set4";

const Synergy = ({ synData }) => {
  const [actives, setActives] = useState({});

  useEffect(() => {
    let obj = {};
    Object.keys(activeTraits).forEach((trait) => {
      Object.keys(synData).forEach((syn) => {
        let tiers = activeTraits[trait];
        let num = synData[syn];
        if (trait === syn) {
          let length = tiers.length;
          for (let i = length - 1; i >= 0; i--) {
            if (num >= tiers[i]) return (obj[syn] = tiers[i]);
          }
        }
      });
    });
    console.log(obj);
    setActives(obj);
  }, [synData]);

  return (
    <>
      <h1>Active Synergies</h1>
      <div style={{ display: "flex" }}>
        {actives &&
          Object.keys(actives).map((syn) => {
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
                {synergy}({actives[syn]})
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Synergy;
