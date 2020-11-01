import React from "react";
import IconButton from "@material-ui/core/IconButton";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";

const MenuBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <IconButton color="inherit">
          <HomeOutlinedIcon />
        </IconButton>
      </NavLink>

      <NavLink to="/build-create">
        <IconButton color="inherit">
          <CreateOutlinedIcon />
        </IconButton>
      </NavLink>

      <NavLink to="/profile/1/bookmarks">
        <IconButton color="inherit">
          <BookmarksOutlinedIcon />
        </IconButton>
      </NavLink>

      <DropDown />
    </nav>
  );
};

export default MenuBar;
