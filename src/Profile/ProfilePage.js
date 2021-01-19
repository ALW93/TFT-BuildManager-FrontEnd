import React, { useState, useEffect } from "react";
import { TFT_BASE } from "../config";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./ProfilePage.css";

const ProfilePage = ({ match }) => {
  const [user, setUser] = useState({});
  const [buildData, setBuildData] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const userId = match.params.id;
      const response = await fetch(`${TFT_BASE}/users/id/${userId}`);
      const data = await response.json();
      setUser(data);
    };
    getInfo();
  }, [match.params.id]);

  return (
    <div className="Profile__Container">
      <div className="profile__topbar">
        <div className={`profile__image fuwa`}></div>
        <div className="profile__details">
          <h1>{user.username}</h1>
          <h2>
            Rank: {user.rank}
            {user.verified ? <CheckBoxIcon /> : null}
          </h2>
          <h4>Joined On: {user.joined}</h4>
          <h5>
            Followers: {user.followerCount} Following: {user.followingCount}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
