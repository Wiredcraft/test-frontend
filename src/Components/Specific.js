import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Specific({ township }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={township.name}
          src={require(`../Images/${township.id}.jpg`)}
          height="140"
          title={township.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {township.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {township.name} has{" "}
            {Intl.NumberFormat().format(township.voterNumbers)} voters and{" "}
            {Intl.NumberFormat().format(township.lastInput)} residents.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
