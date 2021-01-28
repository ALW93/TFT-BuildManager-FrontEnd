import React from "react";

export const displayActive = (actives, tiers) => {
  return (
    <div className="flex">
      {tiers.map((e) => {
        if (actives >= e) {
          return <h3>{e}</h3>;
        } else {
          return <h3 style={{ color: "darkgrey" }}>{e}</h3>;
        }
      })}
    </div>
  );
};
