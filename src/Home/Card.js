import React, { useEffect, useState } from "react";
import { TFT_API, IMG_API } from "../config";
import { parseCover } from "../NewBuilder/BoardService";

const Card = ({ data }) => {
  const [cover, setCover] = useState("");
  const [loaded, setLoaded] = useState(false);
  let counter = 0;

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${TFT_API}/champions/${parseCover(data).id}`
      );
      const info = await response.json();
      setCover(info[0].name);
    })();
  }, [data]);

  return (
    <div
      className="Build__Preview"
      style={{ display: !loaded ? "none" : "block" }}
    >
      <h1>{data.title}</h1>
      <img
        src={`${IMG_API}/${cover}.jpg`}
        onLoad={() => setLoaded(true)}
        className="preview_image"
      />
    </div>
  );
};
export default Card;
