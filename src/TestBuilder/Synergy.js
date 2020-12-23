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
        if (trait === syn && tiers.includes(num)) obj[syn] = num;
      });
    });
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
                    filter:
                      "invert(70%) sepia(96%) saturate(5422%) hue-rotate(163deg) brightness(98%) contrast(106%)",
                  }}
                />
                {synergy}({synData[syn]})
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Synergy;
