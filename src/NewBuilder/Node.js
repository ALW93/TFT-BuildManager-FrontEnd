import React from "react";
import "./Builder.css";

const Node = () => {
  return (
    <div className="hex-container">
      <div className="trait-gallery">
        <div>Trait 1</div>
        <div>Trait 2</div>
      </div>
      <div className="hex">
        <div className="hex__inner"></div>
      </div>
      <div className="item-gallery">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    </div>
  );
};
export default Node;
