import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
		margin: 10,
	},
});

function Spare(props) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<Link to={`/Repuestos/detail/${props.id}`}>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="220"
						image={props.image}
						title="Contemplative Reptile"
					/>
				</Link>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="h2"
						style={{ textAlign: "center" }}
					>
						{props.name}
					</Typography>
				</CardContent>
			</CardActionArea>
			<Link to={`/Repuestos/detail/${props.id}`}>
				<CardActions className="justify-content-center">
					<Button
						variant="contained"
						color="primary"
					>
						MAS DETALLE
					</Button>
				</CardActions>
			</Link>
		</Card>
	);
}

export default Spare;
