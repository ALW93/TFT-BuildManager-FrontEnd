import React from "react";
import { useSelector } from "react-redux";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./ProfilePage.css";
import BoardCollection from "./BoardCollection";

const ProfilePage = () => {
  const user = useSelector((state) => state.authentication.user);

  return (
    <div className="flex">
      <div className="Profile__Container">
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
            <div>
              <h1>{user.username}</h1>
              <img
                src={`${require(`../Assets/rank_badges/${user.rank.toLowerCase()}.png`)}`}
                style={{ width: "100px" }}
              />
              <h3>Rank: {user.rank}</h3>

              <h3>
                Status:{"  "}
                {user.verified ? (
                  <>
                    Verified
                    <CheckBoxIcon />
                  </>
                ) : (
                  "Unverified"
                )}
              </h3>
              <h4>Member Since {user.joined}</h4>
              <h5>
                Followers: {user.followerCount} Following: {user.followingCount}
              </h5>
            </div>{" "}
            <h4>Match Statistics Coming Soon</h4>
          </>
        ) : null}
      </div>
      <div className="Collection">
        <BoardCollection />
      </div>
    </div>
  );
};

export default ProfilePage;
