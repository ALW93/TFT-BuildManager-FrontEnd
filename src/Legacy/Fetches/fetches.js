import { TFT_BASE, IMG_API } from "../../config";
import { Redirect } from "react-router-dom";
import React from "react";
import { TOKEN_KEY } from "../../store/actions/authentication";

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
export const getAllbuilds = async () => {
  const response = await fetch(`${TFT_BASE}/builds`);
  if (response.ok) {
    const allBuilds = await response.json();
    const idArray = allBuilds.map((b) => b.id);
    return idArray;
  }
};

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
    authorId: authorId,
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
    return <Redirect to="/" />;
  } else {
  }
};
//#endregion

//#region
// Include Build Info with Team & Items
export const getBuildById = async (id) => {
  const response = await fetch(`${TFT_BASE}/builds/id/${id}`);
  if (response.ok) {
    const buildData = response.json();
    return buildData;
  }
};

export const getBuildComments = async (id) => {
  const response = await fetch(`${TFT_BASE}/builds/${id}/comments`);
  if (response.ok) {
    const comments = await response.json();
    return comments;
  }
};

//#region User Info
export const getUserInfo = async (id) => {
  const response = await fetch(`${TFT_BASE}/users/${id}`);
  if (response.ok) {
    const user = await response.json();
    return user;
  }
};

export const getUserBuilds = async (id) => {
  const response = await fetch(`${TFT_BASE}/users/${id}/builds`);
  if (response.ok) {
    const buildIds = await response.json();
    return buildIds.builds;
  }
};

export const getUserBookmarks = async (id) => {
  const response = await fetch(`${TFT_BASE}/users/${id}/bookmarks`);
  if (response.ok) {
    const bookmarks = await response.json();
    const arr = bookmarks.bookmarks.map((e) => e.id);
    return arr;
  }
};

export const postComment = async (data) => {
  const token = window.localStorage.getItem(TOKEN_KEY);

  const response = await fetch(`${TFT_BASE}/builds/${data.buildId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
  }
};

export const bookmark = async (data) => {
  const token = window.localStorage.getItem(TOKEN_KEY);

  const response = await fetch(
    `${TFT_BASE}/users/${data.followerId}/bookmarks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.ok) {
  } else {
  }
};

export const removeBookmark = async (data) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  const response = await fetch(
    `${TFT_BASE}/users/${data.followerId}/bookmarks`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.ok) {
  }
};
