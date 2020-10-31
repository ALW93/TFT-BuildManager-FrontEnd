import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../Assets/NavBar.jpg";
import MenuBar from "./MenuBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  AppBar: {
    height: 275,
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        className={classes.AppBar}
        style={{
          backgroundImage: `url(${pic})`,
          backgroundPosition: "right center",
        }}
      >
        <div>
          <Typography className={classes.title} variant="h5" noWrap>
            Teamfight Tactics Build Manager
          </Typography>
        </div>
        <div>
          <MenuBar />
        </div>
      </AppBar>
    </div>
  );
}
