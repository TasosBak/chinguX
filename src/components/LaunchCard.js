import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TextTruncate from "react-text-truncate";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 400,
  },
});

export default function LaunchCard({
  name,
  description,
  picture,
  wikipediaLink,
}) {
  const classes = useStyles();

  const style = {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <Card className={classes.root}>
      <CardActionArea style={style}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <TextTruncate
              line={3}
              element="span"
              truncateText="…"
              text={description}
              textTruncateChild={
                <a
                  color="primary"
                  href={wikipediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Read on
                </a>
              }
            />
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <a
          color="primary"
          href={wikipediaLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions> */}
    </Card>
  );
}
