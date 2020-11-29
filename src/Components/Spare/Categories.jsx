import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";
import { Link } from "react-router-dom";

function Categories(props) {
  const useStyles = makeStyles({
		root: {
      maxWidth: 345,
      margin:20
		},
		media: {
			height: 250
		}
	});
	const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardActionArea>
    <Link to={`/Categoria/${props.id}`}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.name}
      />
      </Link>
      <CardContent style={{textAlign:"center"}}>
        <Typography  variant="h6" component="h3" align="center">
        {_.toUpper(props.name)}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}

export default Categories;