//#region Imports
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./SmallCard.css";
//#endregion

export default function SmallCard(props) {
  const useStyles = makeStyles({
    image: {
      backgroundImage: `url(${props.image})`,
      maxWidth: "100%",
      height: "350px",
      backgroundSize: "220px 440px",
      backgroundPosition: "center top",
    },
    text: {
      paddingTop: 0,
    },
  });

  const classes = useStyles();

  if (props.utility) {
    return (
      <Card className="test">
        <div className={classes.image} />
        <CardContent align="center" className={classes.text}>
          <h2> {props.title}</h2>
          <Button size="small" color="primary">
            click here
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="test">
      <div className={classes.image} />
      <CardContent align="center" className={classes.text}>
        <h2> {props.title}</h2>

        <h5>
          creator:{" "}
          <Link to={`/profile/${props.authorId}`}>{props.author} </Link>
        </h5>

        <Link to={`/build/id/${props.id}`}>
          <Button size="small" color="primary">
            View Build
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
