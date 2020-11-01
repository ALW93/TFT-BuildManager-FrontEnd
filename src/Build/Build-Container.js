import React from "react";
import BuildForm from "./BuildForm";
import MenuBar from "../shared_components/MenuBar";

const BuildContainer = (props) => {
  return (
    <div>
      <MenuBar />
      <BuildForm />
    </div>
  );
};

export default BuildContainer;
