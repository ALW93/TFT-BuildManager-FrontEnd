import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/authentication";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.black,
      },
    },
  },
}))(MenuItem);

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const myId = window.localStorage.getItem("USER_ID");

  return (
    <div>
      <IconButton onClick={handleClick} color="white">
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink to={`/profile/${myId}`}>
          <StyledMenuItem>
            <ListItemIcon>
              <AccountCircleOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </StyledMenuItem>
        </NavLink>

        <NavLink to="/build-create">
          <StyledMenuItem>
            <ListItemIcon>
              <CreateOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Create Build" />
          </StyledMenuItem>
        </NavLink>

        <NavLink to={`/profile/${myId}/bookmarks`}>
          <StyledMenuItem>
            <ListItemIcon>
              <BookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="My Bookmarks" />
          </StyledMenuItem>
        </NavLink>

        <StyledMenuItem onClick={handleLogout}>
          <ListItemIcon>
            <MeetingRoomOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
