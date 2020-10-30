import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import "./SmallCard.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
  },
});

export default function SmallCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="350"
        image={props.image}
        title="Contemplative Reptile"
      />
      <CardContent align="center">
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h8" component="h5">
          Created By: {props.author}
        </Typography>
        <Button size="small" color="primary">
          View Build
        </Button>
      </CardContent>
    </Card>
  );
}
