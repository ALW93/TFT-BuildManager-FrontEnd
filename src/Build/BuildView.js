import React, { useEffect, useState } from "react";
import {
  getBuildById,
  getBuildComments,
  getAuthorName,
} from "../Fetches/fetches";
import "./BuildView.css";
import { IMG_API } from "../config";
import { Grow } from "@material-ui/core";

const BuildView = ({ match }) => {
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const buildId = match.params.id;
      const info = await getBuildById(buildId);
      setData({ ...data, ...info.build });
      const newComments = await getBuildComments(buildId);
      setComments([...comments, ...newComments]);
      const author = await getAuthorName(info.build.authorId);
      setAuthor(author);
      const newTeam = info.build.team.map((e) => {
        const obj = { name: e.name, carry: false };
        if (e.build_champion.carry === true) obj.carry = true;
        return obj;
      });
      setTeam([...team, ...newTeam]);
    };
    getInfo();
  }, []);

  return (
    <>
      <h1>Build View</h1>
      <div className="edit_delete">
        <button>edit</button>
        <button>delete</button>
      </div>
      <div className="buildContainer">
        <div className="buildContainer__topBar">
          <div className="buildContainer__topBar--votes">
            <h2>Votes: {data.votes}</h2>
          </div>
          <div className="buildContainer__topBar--info">
            <h1>{data.title}</h1>
            <h3>Created By: {author}</h3>
            <h4>Play Style: {data.playstyle}</h4>
          </div>
        </div>
        <div className="buildContainer__teamDisplay">
          {team.map((e) => (
            <div className="character_container">
              <h3>{e.name}</h3>
              <Grow in={true}>
                <img
                  className="character_card"
                  src={`${IMG_API}/${e.name}.jpg`}
                />
              </Grow>
            </div>
          ))}
        </div>
        <div className="buildContainer__bottomBar">
          <div className="buildContainer__bottomBar--details"></div>
          <div className="buildContainer__bottomBar--comments"></div>
        </div>
      </div>
    </>
  );
};

export default BuildView;
