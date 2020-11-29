import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DetailSpare from "./DetailSpare";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddSpareToQuatation from "./Quotation/AddSpareToQuatation";

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
	}
});

function Spare(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
  };
	return (
		<>
		<Grid item md={3}>
			<Card className={classes.root}>
				<CardActionArea onClick={handleClickOpen}>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="220"
						image={props.spare.imageSrc}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h6"
							component="h2"
							style={{ textAlign: "center" }}
						>
							{props.spare.name}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className="justify-content-center">
					<DetailSpare
						spare={props.spare}
						updateSpare={props.updateSpare}
					></DetailSpare>
					<Button
						variant="contained"
						color="secondary"
						size="small"
						startIcon={<DeleteIcon />}
						onClick={e => props.deleteSpare(e, parseInt(props.spare.idSpare))}
					>
						ELIMINAR
					</Button>
				</CardActions>
			</Card>
			</Grid>
			<AddSpareToQuatation open={open} handleClose={handleClose} spare={props.spare}/>
		</>
	);
}

export default Spare;
