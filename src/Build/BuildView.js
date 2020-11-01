import React, { useEffect, useState } from "react";
import {
  getBuildById,
  getBuildComments,
  getAuthorName,
} from "../Fetches/fetches";
import "./BuildView.css";
import { IMG_API, ICON_IMG_API } from "../config";
import { Grow } from "@material-ui/core";
import MenuBar from "../shared_components/MenuBar";
import Author from "./Author";

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
      const author = await getAuthorName(info.build.authorId);
      setAuthor(author);
      const newTeam = info.build.team.map((e) => {
        const obj = { name: e.name, carry: false };
        if (e.build_champion.carry === true) obj.carry = true;
        return obj;
      });
      setTeam([...team, ...newTeam]);
      const newComments = await getBuildComments(buildId);
      setComments([...comments, ...newComments]);
    };
    getInfo();
  }, []);

  return (
    <>
      <MenuBar />
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
          {team.map((e) => {
            let border = "character_card";
            if (e.carry === true) {
              border = "character_card-carry";
            }
            return (
              <div className="character_container" key={e.name}>
                <h3>{e.name}</h3>
                <Grow in={true}>
                  <img className={border} src={`${IMG_API}/${e.name}.jpg`} />
                </Grow>
              </div>
            );
          })}
        </div>
        <div className="buildContainer__bottomBar">
          <div className="buildContainer__bottomBar--details">
            <div className="details__itemization">
              <h2>Itemization</h2>
              <div>
                {team.map((e) => {
                  if (e.carry === true) {
                    return (
                      <div className="carry__container" key={e.name}>
                        <img
                          className="championIcon"
                          src={`${ICON_IMG_API}${e.name}.png`}
                        />
                        {data.team.map((c) => {
                          if (e.name === c.name) {
                            return (
                              <ul key={c.name}>
                                {c.default_equipment.map((item) => {
                                  return <li key={item.id}>{item.name}</li>;
                                })}
                              </ul>
                            );
                          }
                        })}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="details__information">
              <h2>Information</h2>
              <div>{data.notes}</div>
            </div>
          </div>
          <div className="buildContainer__bottomBar--comments">
            <h2>Comments</h2>
            {comments.map((c) => {
              return (
                <div className="comment__container">
                  <div className="comment__body">{c.message}</div>
                  <div className="comment__author">
                    <Author id={c.userId} />
                    on {c.createdAt}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildView;
