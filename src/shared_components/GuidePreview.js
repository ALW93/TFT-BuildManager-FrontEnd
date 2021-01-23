import React from "react";
import { useHistory } from "react-router-dom";

const GuidePreview = ({ guides }) => {
  const history = useHistory();

  const openGuide = (id) => {
    history.push(`/guide/id/${id}`);
  };

  return (
    <div>
      {guides &&
        Object.keys(guides).map((id) => {
          return (
            <div onClick={() => openGuide(id)}>
              <h1>{guides[id].title}</h1>
              <h2>By {guides[id].author}</h2>
              <h3>Last Updated {guides[id].lastUpdated}</h3>
            </div>
          );
        })}
    </div>
  );
};
export default GuidePreview;
