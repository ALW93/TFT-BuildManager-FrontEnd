import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { TFT_BASE } from "../config";
import BoardPreview from "../shared_components/BoardPreview";

const HomePage = () => {
  const [meta, setMeta] = useState([]);
  const [community, setCommunity] = useState([]);
  const [view, setView] = useState(true);

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
    <div className="w100">
      <div style={{ width: "67%", marginLeft: "12%" }}>
        <div>
          <button onClick={() => setView(true)}>Meta Builds</button>
          <button onClick={() => setView(false)}>Community</button>
        </div>
        {view ? (
          <>
            {meta &&
              Object.keys(meta).map((e) => (
                <BoardPreview id={e} data={meta[e]} />
              ))}
          </>
        ) : (
          <>
            {community &&
              Object.keys(community).map((e) => (
                <BoardPreview id={e} data={community[e]} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
