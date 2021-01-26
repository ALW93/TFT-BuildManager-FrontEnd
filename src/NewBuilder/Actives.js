import React from "react";

export const displayActive = (actives, tiers) => {
  console.log(actives, tiers);
  return (
    <div className="flex">
      {tiers.reverse().map((e) => {
        if (actives >= e) {
          return <h1>{e}</h1>;
        } else {
          return <h3>{e}</h3>;
        }
      })}
    </div>
  );
};
