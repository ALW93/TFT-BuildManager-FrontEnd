import { TFT_BASE, IMG_API } from "../config";
import { Redirect } from "react-router-dom";
import React from "react";
import { TOKEN_KEY } from "../store/actions/authentication";

//#region General Use Functions
const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

export const getAuthorName = async (id) => {
  const res = await fetch(`${TFT_BASE}/users/${id}`);
  if (res.ok) {
    const author = await res.json();
    return author.username;
  }
};
//#endregion

//#region Card Data Functions
export const getEditorBuilds = async () => {
  const response = await fetch(`${TFT_BASE}/users/1/builds`);
  if (response.ok) {
    const metaBuilds = await response.json();
    const buildArray = metaBuilds.builds;
    return buildArray;
  }
};

export const parseCardData = async (object) => {
  const { authorId, id, team, title } = object;
  const image = team[getRandom(team.length - 1, 0)].name;
  const name = await getAuthorName(authorId);

  return {
    author: name,
    title: title,
    id: id,
    image: `${IMG_API}/${image}.jpg`,
  };
};

// #endregion

//#region Create Build Functions

export const createBuild = async (data) => {
  const token = window.localStorage.getItem(TOKEN_KEY);

  const response = await fetch(`${TFT_BASE}/builds`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log("Build Posted!");
    return <Redirect to="/" />;
  } else {
    console.log("something went wrong");
  }
};
