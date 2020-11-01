import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const images = [
  "Ahri",
  "Azir",
  "Teemo",
  "Lux",
  "LeeSin",
  "Kindred",
  "Yone",
  "Akali",
];

const SideBar = () => {
  const [img, setImg] = useState("default sidebar");

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
