import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { TFT_BASE } from "../config";
import BoardAccordion from "../shared_components/BoardAccordion";
import BoardPreview from "../shared_components/BoardPreview";

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
      <div style={{ width: "67%", marginLeft: "12%" }}>
        <div>
          Toggle Area<button>11.2 Meta</button>
        </div>
        <BoardPreview boards={meta} />
        <BoardAccordion boards={meta} type="browser" />
        <BoardAccordion boards={community} type="browser" />
      </div>
    </div>
  );
};

export default HomePage;
