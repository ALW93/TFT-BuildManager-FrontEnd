import React, { useEffect, useState } from "react";
import { TFT_API, IMG_API } from "../config";
import { useHistory, Link } from "react-router-dom";
import { parseCover } from "../NewBuilder/BoardService";

const Card = ({ data }) => {
  const [cover, setCover] = useState("");
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${TFT_API}/champions/${parseCover(data).id}`
      );
      const info = await response.json();
      setCover(info[0].name);
    })();
  }, [data]);

  const redirectView = () => {
    history.push(`/build/id/${data.id}`);
  };

  return (
    <Link to={`/build/id/${data.id}`}>
      <div
        className="Build__Preview"
        style={{ display: !loaded ? "none" : "block" }}
      >
        <h1 onClick={redirectView}>{data.title}</h1>
        {data.Author ? <h2>By {data.Author.username}</h2> : null}

        <img
          src={`${IMG_API}/${cover}.jpg`}
          className="preview_image"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </Link>
  );
};
export default Card;
