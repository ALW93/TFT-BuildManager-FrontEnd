import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./SmallCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
  },
});

export default function SmallCard(props) {
  const classes = useStyles();

  if (props.utility) {
    return (
      <Card className={classes.root}>
        <CardMedia component="img" height="350" image={props.image} />
        <CardContent align="center">
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Button size="small" color="primary">
            click here
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={classes.root}>
      <CardMedia component="img" height="350" image={props.image} />
      <CardContent align="center">
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <h5>creator: {props.author}</h5>
        <Link to={`/build/id/${props.id}`}>
          <Button size="small" color="primary">
            View Build
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
