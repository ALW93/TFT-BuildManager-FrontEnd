import React, { useState, useEffect } from "react";
import TopBar from "../shared_components/TopBar";
import {
  getUserInfo,
  getUserBuilds,
  getUserBookmarks,
} from "../Fetches/fetches";
import "./ProfilePage.css";

const ProfilePage = ({ match }) => {
  const [user, setUser] = useState({});
  const [builds, setBuilds] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [profpic, setProfpic] = useState("fuwa");

  useEffect(() => {
    const getInfo = async () => {
      const userId = match.params.id;
      const userInfo = await getUserInfo(userId);
      setUser(userInfo);

      const builds = await getUserBuilds(userId);
      setBuilds(builds);

      const bookmarks = await getUserBookmarks(userId);
      setBookmarks(bookmarks);
    };
    getInfo();
  }, []);

  return (
    <div>
      <TopBar />
      <div className="profile__topbar">
        <div className={`profile__image ${profpic}`}></div>
        <div className="profile__details">
          <h1>{user.username}</h1>
          <h4>Joined On: {user.createdAt}</h4>
          <div className="profile__statbar">
            <h5>{user.followers ? user.followers.length : 0} Followers</h5>
            <h5>{user.following ? user.following.length : 0} Following</h5>
            <h5>10 Bookmarks</h5>
          </div>
        </div>
      </div>
      <h1>My Published Builds</h1>
    </div>
  );
};

export default ProfilePage;
