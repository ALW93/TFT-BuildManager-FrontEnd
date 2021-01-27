import React from "react";
import { useSelector } from "react-redux";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./ProfilePage.css";

const ProfilePage = () => {
  const user = useSelector((state) => state.authentication.user);

  return (
    <div className="Profile__Container">
      <div className="profile__topbar">
        <div className={`profile__image fuwa`}></div>
        <div className="profile__details">
          <h1>{user && user.username}</h1>

          {user ? (
            <img
              src={`${require(`../Assets/rank_badges/${user.rank.toLowerCase()}.png`)}`}
              style={{ width: "123px" }}
            />
          ) : null}

          <h2>
            Rank: {user && user.rank}
            {user && user.verified ? <CheckBoxIcon /> : null}
          </h2>
          <h4>Joined On: {user && user.joined}</h4>
          <h5>
            Followers: {user && user.followerCount} Following:{" "}
            {user && user.followingCount}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
