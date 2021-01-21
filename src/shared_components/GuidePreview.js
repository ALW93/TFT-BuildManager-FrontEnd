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
              {JSON.stringify(guides[id])}
            </div>
          );
        })}
    </div>
  );
};
export default GuidePreview;
