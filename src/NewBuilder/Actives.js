import React from "react";

export const displayActive = (actives, tiers) => {
  return (
    <div className="flex">
      {tiers.map((num, i) => {
        if (actives >= num && !(actives >= num[i + 1])) {
          return <h1>{num}</h1>;
        } else {
          return <h3>{num}</h3>;
        }
      })}
    </div>
  );
};
