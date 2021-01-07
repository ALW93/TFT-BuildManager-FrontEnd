import React, { useState, useEffect } from "react";
import { TFT_API } from "../config";
import { SelectionPool, GUI } from "./Tools";
import "./Builder.css";

const NewBuilder = () => {
  const [pool, setPool] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${TFT_API}/champions`);
      const data = await response.json();
      setPool(data);
    })();
  }, []);

  return (
    <div className="Builder__Container">
      <h1>New Builder</h1>
      <div className="Builder__Container--Top">
        <div>Traits</div>
        <div>Board</div>
        <div>Items</div>
      </div>
      <div className="Builder__Container--Bottom">
        <GUI />
        <SelectionPool champions={pool} />
      </div>
    </div>
  );
};

export default NewBuilder;
