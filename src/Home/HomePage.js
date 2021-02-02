import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { TFT_BASE } from "../config";
import { Button, makeStyles } from "@material-ui/core";
import BoardPreview from "../shared_components/BoardPreview";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "rgb(255, 207, 148)",
    textShadow: "0 0 3px rgb(210, 123, 17)",
  },
}));

const HomePage = () => {
  const classes = useStyles();
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
      setCommunity(parsed);
    })();
  }, []);

  return (
    <div className="w100">
      <div style={{ width: "60%", margin: "auto" }}>
        <div>
          <Button className={classes.button} onClick={() => setView(true)}>
            Meta Builds
          </Button>
          <Button className={classes.button} onClick={() => setView(false)}>
            Community
          </Button>
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
