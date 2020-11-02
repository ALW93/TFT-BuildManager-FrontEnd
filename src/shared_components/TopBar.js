import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../Assets/NavBar.jpg";
import MenuBar from "./MenuBar";
import Logo from "../Assets/Logo.png";
import "./TopBar.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  AppBar: {
    height: 275,
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/">
        <div className="tft-logo">
          <img src={Logo} alt="logo" />
          <h1 className="title" variant="h5">
            Build Manager
          </h1>
        </div>
      </Link>
      <AppBar
        position="sticky"
        className={classes.AppBar}
        style={{
          backgroundImage: `url(${pic})`,
          backgroundPosition: "right center",
        }}
      >
        <div>
          <MenuBar />
        </div>
      </AppBar>
    </div>
  );
}
