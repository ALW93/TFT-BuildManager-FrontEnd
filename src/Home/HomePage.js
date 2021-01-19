import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { TFT_BASE } from "../config";
import ViewBoard from "../View/ViewBoard";
import BoardAccordion from "../shared_components/BoardAccordion";

const HomePage = () => {
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${TFT_BASE}/boards/meta`);
      const data = await response.json();
      setMeta(data);
    })();
  }, []);

  return (
    <div>
      <h1>DISCOVER</h1>
      <div className="BuildContainer__Meta"></div>
      <BoardAccordion boards={meta} />
    </div>
  );
};

export default HomePage;
