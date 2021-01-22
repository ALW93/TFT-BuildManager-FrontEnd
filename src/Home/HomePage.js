import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { TFT_BASE } from "../config";
import BoardAccordion from "../shared_components/BoardAccordion";

const HomePage = () => {
  const [meta, setMeta] = useState([]);
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${TFT_BASE}/boards/meta`);
      const data = await response.json();
      setMeta(data);
      const res = await fetch(`${TFT_BASE}/boards/community`);
      const parsed = await res.json();
      setCommunity(parsed);
    })();
  }, []);

  return (
    <div className="w100">
      <div className="flex">
        <div className="b1 w100">
          <BoardAccordion boards={meta} type="browser" />
          <BoardAccordion boards={community} type="browser" />
        </div>
        <div style={{ width: "25%" }}>Something</div>
      </div>
    </div>
  );
};

export default HomePage;
