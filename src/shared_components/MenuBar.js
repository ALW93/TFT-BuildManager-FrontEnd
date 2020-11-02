import React from "react";
import IconButton from "@material-ui/core/IconButton";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <nav>
      <div style={{ display: "flex" }}>
        <NavLink to="/" activeClassName="active">
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </NavLink>

        <NavLink to="/build-create" activeClassName="active">
          <IconButton>
            <CreateOutlinedIcon />
          </IconButton>
        </NavLink>

        <NavLink
          to="/profile/1/bookmarks"
          className="nav"
          activeClassName="active"
        >
          <IconButton>
            <BookmarksOutlinedIcon />
          </IconButton>
        </NavLink>

        <DropDown />
      </div>
    </nav>
  );
};

export default MenuBar;
