import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const GuidePreview = ({ guides }) => {
  const history = useHistory();

  const openGuide = (id) => {
    history.push(`/guide/id/${id}`);
  };

  return (
    <ul className="w100">
      {guides &&
        Object.keys(guides).map((id) => {
          return (
            <div className="flex">
              <li
                onClick={() => openGuide(id)}
                style={{
                  listStyleType: "square",
                  margin: "2px",
                  width: "100%",
                  border: "2px solid blue",
                  paddingLeft: "20px",
                }}
              >
                <h2>{guides[id].title}</h2>
                <h3>By {guides[id].author}</h3>
                <h4>Last Updated {guides[id].lastUpdated}</h4>
              </li>
              <Button
                variant="contained"
                color="secondary"
                style={{ maxHeight: "50px" }}
              >
                Remove
              </Button>
            </div>
          );
        })}
    </ul>
  );
};
export default GuidePreview;
