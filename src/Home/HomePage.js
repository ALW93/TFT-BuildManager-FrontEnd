import React, { useEffect, useState } from "react";
import "./HomePage.css";
import TopBar from "../shared_components/TopBar";
import SmallCard from "../shared_components/SmallCard";
import { TFT_BASE, IMG_API } from "../config";
import {
  getAllbuilds,
  getEditorBuilds,
  parseCardData,
} from "../Fetches/fetches";

const image = `${IMG_API}/Azir.jpg`;
const moreTitle = "View All Meta Builds";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const buildArray = await getEditorBuilds();
      buildArray &&
        buildArray.forEach(async (b, i) => {
          const response = await fetch(`${TFT_BASE}/builds/id/${b}`);
          if (response.ok) {
            const details = await response.json();
            const info = await parseCardData(details.build);
            setData((data) => [...data, info]);
          }
        });

      const allArray = await getAllbuilds();
      allArray &&
        allArray.forEach(async (b, i) => {
          const response = await fetch(`${TFT_BASE}/builds/id/${b}`);
          if (response.ok) {
            const allDetails = await response.json();
            const allInfo = await parseCardData(allDetails.build);
            setAllData((allData) => [...allData, allInfo]);
          }
        });
    }

    fetchData();
  }, []);

  const AllCards = () => {
    return allData.map((e) => {
      return (
        <SmallCard
          key={e.id}
          id={e.id}
          image={e.image}
          title={e.title}
          author={e.author}
          authorId={e.authorId}
        />
      );
    });
  };

  const MetaCards = () => {
    let counter = 0;
    const cards = data.map((e) => {
      if (counter === 5) return;
      counter++;
      return (
        <SmallCard
          key={e.id}
          id={e.id}
          image={e.image}
          title={e.title}
          author={e.author}
          authorId={e.authorId}
        />
      );
    });
    return cards;
  };

  return (
    <div className="HomePage__Container">
      <TopBar />

      <div className="BuildContainer__Meta">
        <h1 className="metaTitle">Meta Builds for Patch 10.22</h1>
        <div className="BuildContainer__Carousel">
          <MetaCards />
          <SmallCard image={image} title={moreTitle} utility={true} />
        </div>
        <h1 className="metaTitle">Community Builds</h1>
        <div className="BuildContainer__Carousel">
          <AllCards />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
