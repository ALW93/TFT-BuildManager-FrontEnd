import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { TFT_BASE } from "../config";
import BoardPreview from "./BoardPreview";

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
          <h1 className="metaTitle">Meta Builds for Patch 11.1</h1>
          <div>
            <button>Tierlist</button>
            <button>Meta Guides</button>
            <button>Community</button>
          </div>
          <div className="BuildContainer__Carousel">
            {meta &&
              meta.map((build) => {
                return <BoardPreview data={build} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
