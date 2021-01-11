import React, { useEffect, useState } from "react";
import "./HomePage.css";
import TopBar from "../shared_components/TopBar";
import { TFT_BASE, IMG_API, TFT_API } from "../config";
import { parseCover } from "../NewBuilder/BoardService";
import Card from "./Card";

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
      <TopBar />

      <div className="BuildContainer__Meta">
        <h1 className="metaTitle">Meta Builds for Patch 10.25</h1>
        <div className="BuildContainer__Carousel">
          {meta &&
            meta.map((e) => {
              return <Card data={e} />;
            })}
        </div>
        <h1 className="metaTitle">Community Builds</h1>
        <div className="BuildContainer__Carousel"></div>
      </div>
    </div>
  );
};

export default HomePage;
