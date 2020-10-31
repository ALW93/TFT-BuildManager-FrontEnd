import React, { useEffect, useState } from "react";
import "./HomePage.css";
import TopBar from "../shared_components/TopBar";
import SmallCard from "../shared_components/SmallCard";
import { TFT_BASE, IMG_API } from "../config";
import { getEditorBuilds, parseCardData } from "../Fetches/fetches";

const image = `${IMG_API}/Azir.jpg`;
const moreTitle = "View All Meta Builds";

const HomePage = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    async function fetchData() {
      const buildArray = await getEditorBuilds();
      buildArray.forEach(async (b, i) => {
        const response = await fetch(`${TFT_BASE}/builds/id/${b}`);
        if (response.ok) {
          const details = await response.json();
          const info = await parseCardData(details.build);
          setData((data) => [...data, info]);
        }
      });
    }
    fetchData();
  }, []);

  const Cards = () => {
    return data.map((e) => (
      <SmallCard key={e.id} image={e.image} title={e.title} author={e.author} />
    ));
  };

  return (
    <div className="HomePage__Container">
      <TopBar />

      <div className="BuildContainer__Meta">
        <h1 className="metaTitle">Meta Builds for Patch 10.22</h1>
        <div className="BuildContainer__Meta--Carousel">
          <Cards />
          <SmallCard image={image} title={moreTitle} utility={true} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
