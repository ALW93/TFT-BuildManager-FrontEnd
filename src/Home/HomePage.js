import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Switch, Router, BrowserRouter } from "react-router-dom";
import { TFT_BASE } from "../config";
import Card from "./Card";
import Routes from "../Utility/routes";

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
    <div className="HomePage__Container">
      <h1>DISCOVER</h1>
      <div className="BuildContainer__Meta">
        <div>
          <h1 className="metaTitle">Meta Guides for Patch 10.25</h1>
          <div className="BuildContainer__Carousel"></div>
        </div>
        <div>
          <h1 className="metaTitle">Guides</h1>
          <div className="BuildContainer__Carousel"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
