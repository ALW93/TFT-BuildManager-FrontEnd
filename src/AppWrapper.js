import React from "react";
import { InteriorSwitch, routeRefs } from "./Utility/routes";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/actions/authentication";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import pic from "./Assets/NavBar.jpg";
import logo from "./Assets/Logo.png";

const drawerWidth = "15vw";
const appbarHeight = "20vh";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: appbarHeight,
    backgroundImage: `url(${pic})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    border: "1px solid black",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    marginTop: appbarHeight,
    overflow: "auto",
  },
  content: {
    marginTop: appbarHeight,
    flexGrow: 1,
    padding: theme.spacing(2),
    maxWidth: "85vw",
    minHeight: "85vh",
    maxHeight: "80vh",
    overflow: "scroll",
  },
}));

export default function AppWrapper() {
  const classes = useStyles();
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  const logoutApp = async () => {
    await dispatch(logout());
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <img src={logo} style={{ width: "25%" }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            {["Browse", "My Collection"].map((text, index) => {
              return (
                <Link to={routeRefs(user && user.id)[text]}>
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              );
            })}
          </List>
          <Divider />
          <List>
            {["Publish Guide", "Create Board"].map((text, index) => (
              <Link to={routeRefs(user && user.id)[text]}>
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <Link to={`/profile/id/${user && user.id}`}>
            <ListItem button key="Account">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </Link>
          <ListItem button key="logout" onClick={logoutApp}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="logout" />
          </ListItem>
        </div>
      </Drawer>
      <main className={classes.content}>
        <InteriorSwitch />
      </main>
    </div>
  );
}
