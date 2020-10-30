import React from "react";
import "./HomePage.css";
import TopBar from "../shared_components/TopBar";
import SmallCard from "../shared_components/SmallCard";

function HomePage() {
  const image = "https://tft-buildmanager.s3.amazonaws.com/Duelist.jpg";
  const title = "6 Divine Sharpshooter";
  const author = "BerBer";
  const tier = "S";

  return (
    <div>
      <TopBar />
      <div>
        <h1>Meta Builds</h1>
        <SmallCard image={image} title={title} author={author} tier={tier} />
      </div>
    </div>
  );
}

export default HomePage;
