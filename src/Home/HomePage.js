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
      console.log(parsed);
      setCommunity(parsed);
    })();
  }, []);

  return (
    <div>
      <h1>DISCOVER</h1>
      <div className="flex">
        <div>
          <h1>Meta Builds</h1>
          <BoardAccordion boards={meta} type="general" />
        </div>
        <div>
          <h1>Community</h1>
          <BoardAccordion boards={community} type="general" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
