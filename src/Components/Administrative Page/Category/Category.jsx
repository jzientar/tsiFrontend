import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import EditCategory from "./EditCategory"
const Category = props => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    }
  });
  const classes = useStyles();
  return (
    <>
		<Grid item md={3}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="220"
						image={props.category.imageSrc}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h6"
							component="h2"
							style={{ textAlign: "center" }}
						>
							{props.category.name}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className="justify-content-center">
					<EditCategory
						category={props.category}
						updateCategory={props.updateCategory}
					></EditCategory>
					<Button
						variant="contained"
						color="secondary"
						size="small"
						startIcon={<DeleteIcon />}
						onClick={e => props.deleteCategory(e, parseInt(props.category.idCategory))}
					>
						ELIMINAR
					</Button>
				</CardActions>
			</Card>
			</Grid>
		</>
  );
};

export default Category;