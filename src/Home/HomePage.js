import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { TFT_BASE } from "../config";
import BoardPreview from "../shared_components/BoardPreview";
import ViewBoard from "../View/ViewBoard";

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
      {meta &&
        meta.map((build) => {
          return (
            <div>
              <ViewBoard data={build.grid} />
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
