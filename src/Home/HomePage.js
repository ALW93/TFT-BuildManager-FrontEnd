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
      <h1>HOMEPAGE</h1>
      <div className="BuildContainer__Meta">
        <h1 className="metaTitle">Meta Builds for Patch 10.25</h1>
        <div className="BuildContainer__Carousel">
          {/* {meta &&
            meta.map((e) => {
              return <Card data={e} />;
            })} */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
