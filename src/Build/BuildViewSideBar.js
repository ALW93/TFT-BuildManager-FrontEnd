import React, { useEffect, useState } from "react";
import "./BuildViewSideBar.css";
import { IMG_API } from "../config";

const BuildViewSideBar = (props) => {
  const [img, setImg] = useState("daystarfuwa");

  useEffect(() => {
    props.array.forEach((e) => {
      if (e.carry === true) {
        setImg(e.name);
      }
    });
  }, [props]);

  return (
    <div>
      <div
        style={{ backgroundImage: `url("${IMG_API}/${img}.jpg")` }}
        className="view-sidebar"
      ></div>
    </div>
  );
};

export default BuildViewSideBar;
