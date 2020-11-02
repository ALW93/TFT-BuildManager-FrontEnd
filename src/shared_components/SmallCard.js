//#region Imports
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import React from "react";
import "./SmallCard.css";
//#endregion

export default function SmallCard(props) {
  const useStyles = makeStyles({
    image: {
      backgroundImage: `url(${props.image})`,
      width: "200px",
      height: "410px",
      backgroundSize: "220px 410px",
      backgroundPosition: "center top",
    },
  });

  const classes = useStyles();

  if (props.utility) {
    return (
      <Link to="/profile/1">
        <div className="card_container">
          <div className="test">
            <div className={classes.image} />
            <div className="text_utility">
              <h2> {props.title}</h2>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/build/id/${props.id}`}>
      <div className="card_container">
        <div className="test">
          <div className={classes.image} />
        </div>
        <div className="text">
          <h2> {props.title}</h2>
          <h5>
            author ||
            <Link to={`/profile/${props.authorId}`}> {props.author} </Link>
          </h5>
        </div>
      </div>
    </Link>
  );
}
