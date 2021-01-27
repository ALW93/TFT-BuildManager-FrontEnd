import React from "react";
import { useHistory } from "react-router-dom";

const GuidePreview = ({ guides }) => {
  const history = useHistory();

  const openGuide = (id) => {
    history.push(`/guide/id/${id}`);
  };

  return (
    <ul style={{ width: "70%" }}>
      {guides &&
        Object.keys(guides).map((id) => {
          return (
            <div className="flex">
              <li
                onClick={() => openGuide(id)}
                style={{
                  listStyleType: "square",
                  margin: "2px",
                  paddingLeft: "20px",
                }}
              >
                <h1>{guides[id].title}</h1>
                <h2>By {guides[id].author}</h2>
                <h3>Last Updated {guides[id].lastUpdated}</h3>
              </li>
              <button>Remove</button>
            </div>
          );
        })}
    </ul>
  );
};
export default GuidePreview;
