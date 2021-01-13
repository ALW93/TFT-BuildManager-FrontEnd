import React, { useEffect, useState } from "react";
import "./HomePage.css";
import TopBar from "../shared_components/TopBar";
import { TFT_BASE } from "../config";
import Card from "./Card";

const HomePage = () => {
  const [meta, setMeta] = useState([]);
  const [all, setAll] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${TFT_BASE}/boards/meta`);
      const data = await response.json();
      setMeta(data);
      const res = await fetch(`${TFT_BASE}/boards`);
      const info = await res.json();
      setAll(info);
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
        <h1 className="metaTitle">Community Builds</h1>
        <div className="BuildContainer__Carousel">
          {/* {all &&
            all.map((e) => {
              return <Card data={e} />;
            })} */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
