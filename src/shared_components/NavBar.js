import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import pic from "../Assets/NavBar.jpg";
import { Redirect } from "react-router-dom";

const clickHandler = (e) => <Redirect to="/login" />;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  AppBar: {
    height: 300,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

export default function NavBar() {
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
        <div onClick={clickHandler}>
          <Typography className={classes.title} variant="h5" noWrap>
            Teamfight Tactics Build Manager
          </Typography>
        </div>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit">
            <CreateOutlinedIcon />
          </IconButton>

          <IconButton aria-label="search" color="inherit">
            <BookmarksOutlinedIcon />
          </IconButton>

          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
