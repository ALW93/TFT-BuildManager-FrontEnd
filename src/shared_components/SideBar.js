import React, { useEffect, useState } from "react";
import "./Nav.css";

const images = [
  "Mystic",
  "Keeper",
  "Adept",
  "Spirit",
  "Dazzler",
  "Default",
  "Ninja",
];

const SideBar = () => {
  const [img, setImg] = useState("Mystic sidebar");

  let count = 0;

  const counter = () => {
    const max = images.length - 1;
    if (count === max) count = 0;
    count++;
    return images[count];
  };

  useEffect(() => {
    setInterval(async () => {
      const newPic = `${counter()} sidebar`;
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
