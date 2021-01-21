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
      <h1>DISCOVER</h1>
      <div className="flex">
        <div className="b1 w50">
          <h1>Meta Builds</h1>
          <BoardAccordion boards={meta} type="browser" />
        </div>
        <div className="b2 w50">
          <h1>Community</h1>
          <BoardAccordion boards={community} type="browser" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
