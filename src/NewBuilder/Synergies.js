import React, { useState, useEffect } from "react";
import { activeTraits } from "../set4/set4";
import { orderedSynergies } from "./BoardService";

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
    console.log(orderedSynergies(obj));
  }, [data]);

  return <div>{JSON.stringify(actives)}</div>;
};

export default Synergies;
