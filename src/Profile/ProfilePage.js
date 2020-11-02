import React, { useState, useEffect } from "react";
import TopBar from "../shared_components/TopBar";
import {
  getUserInfo,
  getUserBuilds,
  parseCardData,
  getBuildById,
} from "../Fetches/fetches";
import "./ProfilePage.css";
import SmallCard from "../shared_components/SmallCard";

const ProfilePage = ({ match }) => {
  const [user, setUser] = useState({});
  const [buildData, setBuildData] = useState([]);
  // const [bookmarks, setBookmarks] = useState([]);
  // const [profpic, setProfpic] = useState("fuwa");

  useEffect(() => {
    const getInfo = async () => {
      const userId = match.params.id;
      const userInfo = await getUserInfo(userId);
      setUser(userInfo);

      // const bookmarks = await getUserBookmarks(userId);
      // setBookmarks(bookmarks.bookmarks);

      const buildArray = await getUserBuilds(userId);

      buildArray.forEach(async (b, i) => {
        const response = await getBuildById(b);
        const info = await parseCardData(response.build);
        setBuildData((buildData) => [...buildData, info]);
      });
    };
    getInfo();
  }, [match.params.id]);

  return (
    <div className="Profile__Container">
      <TopBar />
      <div className="profile__topbar">
        <div className={`profile__image fuwa`}></div>
        <div className="profile__details">
          <h1>{user.username}</h1>
          <h4>Joined On: {user.createdAt}</h4>
          {/* <div className="profile__statbar">
            <h5>{user.followers ? user.followers.length : 0} Followers</h5>
            <h5>{user.following ? user.following.length : 0} Following</h5>
            <h5>{bookmarks.length ? bookmarks.length : 0} Bookmarks</h5>
          </div> */}
        </div>
      </div>
      <div className="BuildContainer">
        <h1>{user.username}'s Published Builds</h1>
        <div className="build_carousel">
          {buildData.length > 0 ? (
            buildData.map((e) => (
              <SmallCard
                key={e.id}
                id={e.id}
                image={e.image}
                title={e.title}
                author={e.author}
                authorId={e.authorId}
              />
            ))
          ) : (
            <div>No Publications Yet!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
