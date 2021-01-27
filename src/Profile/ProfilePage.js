import React from "react";
import { useSelector } from "react-redux";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./ProfilePage.css";

const ProfilePage = () => {
  const user = useSelector((state) => state.authentication.user);

  return (
    <div className="Profile__Container">
      <div className="profile__topbar">
        {user ? (
          <>
            {user.icon === "none" ? (
              <button>Select Icon</button>
            ) : (
              <img
                className="profile__image"
                src={`${require(`../Assets/icons/${user.icon}.png`)}`}
              />
            )}
            <div className="profile__details">
              <h1>{user.username}</h1>

              <img
                src={`${require(`../Assets/rank_badges/${user.rank.toLowerCase()}.png`)}`}
                style={{ width: "123px" }}
              />

              <h2>Rank: {user.rank}</h2>
              <h2>
                Status:{" "}
                {user.verified ? (
                  <h3>
                    Verified <CheckBoxIcon />{" "}
                  </h3>
                ) : (
                  <h3>Unverified</h3>
                )}
              </h2>
              <h4>Joined On: {user.joined}</h4>
              <h5>
                Followers: {user.followerCount} Following: {user.followingCount}
              </h5>
            </div>{" "}
          </>
        ) : null}
        <h4>Match Statistics Coming Soon</h4>
      </div>
    </div>
  );
};

export default ProfilePage;
