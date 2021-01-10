import React, { useEffect, useState } from "react";
import {
  getBuildById,
  getBuildComments,
  getAuthorName,
  postComment,
} from "../Fetches/fetches";
import "./BuildView.css";
import { IMG_API, ICON_IMG_API } from "../config";
import { Grow } from "@material-ui/core";
import MenuBar from "../shared_components/MenuBar";
import BuildViewSideBar from "./BuildViewSideBar";
import Author from "./Author";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
// import BookmarkButton from "./BookMarkButton";

const BuildView = ({ match }) => {
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [team, setTeam] = useState([]);
  const [buildId, setBuildId] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      let viewer = window.localStorage.getItem("USER_ID");
      setUserId(parseInt(viewer));

      const buildId = match.params.id;
      setBuildId(buildId);

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

  const submitHandler = async (e) => {
    e.preventDefault();
    const commentData = {
      userId: userId,
      buildId: buildId,
      message: message,
    };
    await postComment(commentData);
    setSubmit(commentData);
    const newComments = await getBuildComments(buildId);
    setComments(newComments);
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="buildview_menu">
        {/* <div className="interaction__bar">
          {userId === data.authorId ? (
            <div className="edit_delete">
              <Button>edit</Button>
              <Button>delete</Button>
            </div>
          ) : (
            <BookmarkButton buildId={buildId} followerId={userId} />
          )}
        </div> */}
        <MenuBar />
      </div>
      <div className="Main__Section">
        <BuildViewSideBar array={team} />

        <div className="buildContainer">
          <div className="right">
            <div className="buildContainer__topBar">
              <div className="buildContainer__topBar--votes"></div>
              <div className="buildContainer__topBar--info">
                <h1>{data.title}</h1>
                <h3>
                  Author ||
                  <Link to={`/profile/${data.authorId}`}> {author}</Link>
                </h3>
              </div>
            </div>
            <div className="buildContainer__teamDisplay">
              {team.map((e) => {
                let border = "char_name";
                if (e.carry === true) {
                  border = "carry_name";
                }
                return (
                  <div className="character_container" key={e.name}>
                    <Grow in={true}>
                      <img
                        className="character_card"
                        src={`${IMG_API}/${e.name}.jpg`}
                        alt="card_pic"
                      />
                    </Grow>
                    <h3 className={border}>{e.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="buildContainer__bottomBar">
            <div className="buildContainer__bottomBar--details">
              <div className="details__itemization">
                <h2>Itemization</h2>
                <div className="real-carry-container">
                  {team.map((e) => {
                    if (e.carry === true) {
                      return (
                        <div className="carry__container" key={e.name}>
                          <img
                            className="championIcon"
                            src={`${ICON_IMG_API}${e.name}.png`}
                            alt="champion_pic"
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
                <div className="details__information">
                  <h2>Information</h2>
                  <h4>
                    Play Style <h3>{data.playstyle}</h3>
                  </h4>
                  <div className="guide">{data.notes}</div>
                </div>
              </div>
            </div>
            <div className="buildContainer__bottomBar--comments">
              <h2>Comments</h2>

              <div className="comments">
                <form onSubmit={submitHandler}>
                  <TextField
                    type="text"
                    placeholder="Leave a comment..."
                    onChange={updateMessage}
                  />
                  <Button type="submit">Submit</Button>
                </form>
                {comments.map((c) => {
                  return (
                    <div className="comment__container" key={c.id}>
                      <div className="comment__body">{c.message}</div>
                      <div className="comment__author">
                        <Link to={`/profile/${c.userId}`}>
                          <Author id={c.userId} />
                        </Link>
                      </div>
                      on {c.createdAt}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildView;