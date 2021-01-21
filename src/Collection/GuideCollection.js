import React from "react";
import { useSelector } from "react-redux";
import GuidePreview from "../shared_components/GuidePreview";

const GuideCollection = () => {
  const guides = useSelector((state) => state.info.guides);

  return (
    <div>
      <GuidePreview guides={guides} />
    </div>
  );
};

export default GuideCollection;
