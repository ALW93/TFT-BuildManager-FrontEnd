import React, { useEffect, useState } from "react";
import { Fade } from "@material-ui/core";
import "./Nav.css";

const SideBar = () => {
  const [img, setImg] = useState("Mage sidebar");

  const getRandom = () => {
    const images = ["Mage", "Keeper", "Adept", "Spirit", "Elderwood", "Hunter"];
    const random = (max, min) => Math.floor(Math.random() * (max - min) + min);
    return images[random(images.length, 0)];
  };

  useEffect(() => {
    setInterval(async () => {
      const newPic = `${getRandom()} sidebar`;
      await setImg(newPic);
    }, 5000);
  }, []);

  return (
    <div>
      <div className={img}></div>
    </div>
  );
};

export default SideBar;
