import React from "react";

export const displayActive = (actives, tiers) => {
  return (
    <div className="flex">
      {tiers.map((e) => {
        if (actives >= e) {
          return <h3 className="glowHead">{e}</h3>;
        } else {
          return <h3 className="goldHead">{e}</h3>;
        }
      })}
    </div>
  );
};
