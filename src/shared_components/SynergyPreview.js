import React from "react";

const SynergyPreview = ({ synergies }) => {
  return (
    <div className="flex">
      {synergies &&
        Object.keys(synergies).map((e) => {
          let name = e.toLowerCase();
          if (name.includes("set4_")) name = name.replace("set4_", "");
          return (
            <div className="flex">
              <p>{synergies[e]}</p>
              <img
                src={`${require(`../Assets/traits/${name}.svg`)}`}
                style={{ width: "22px", height: "22px" }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SynergyPreview;
