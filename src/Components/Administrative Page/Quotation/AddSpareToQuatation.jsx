import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { addSpare } from "../../Redux/actionsCreators";

const AddSpareToQuatation = (props) => {
	const initialSpare = {
		idSpare: props.spare.idSpare,
		idCategory: props.spare.idCategory,
		name: props.spare.name,
		markSpare: props.spare.markSpare,
		description: props.spare.description,
		price: props.spare.price,
		typeVehicle: props.spare.typeVehicle,
		markVehicle: props.spare.markVehicle,
		modelVehicle: props.spare.modelVehicle,
		imageName: props.spare.imageName,
		imageSrc: props.spare.imageSrc,
		imageFile: props.spare.imageFile,
		countQuotation: 0
	};
	const [spare, setSpare] = useState(initialSpare);

	const handleInputChange = (event) => {
		setSpare({
			...spare,
			[event.target.name]: event.target.value
		});
	};

	const OnSubmitSpare = (event) => {
		event.preventDefault();
		props.handleClose();
		props.addSpareToRedux(spare);
	};
	const useStyles = makeStyles((theme) => ({
		paper: {
			border: "10px solid #000"
		}
	}));
	const classes = useStyles();
	return (
		<div>
			<Dialog
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="form-dialog-title"
				fullWidth
				maxWidth="md"
				className={classes.paper}
			>
				<ValidatorForm onSubmit={OnSubmitSpare}>
					<DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
						COTIZAR
					</DialogTitle>
					<DialogContent>
						<Grid container spacing={2} justify="center" alignItems="center">
							<Grid item md={12} xs={12} style={{ textAlign: "center" }}>
								<img
									src={props.spare.imageSrc}
									className="card-img-top"
									alt="Images"
									style={{ maxWidth: 400, height: 300 }}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<Typography
									style={{ textAlign: "center" }}
									variant="button"
									display="block"
									gutterBottom
								>
									{props.spare.name}
								</Typography>
							</Grid>
							<Grid item md={4} xs={12}>
								<Typography>MARCA: {props.spare.markSpare}</Typography>
							</Grid>
							<Grid item md={4} xs={12}>
								<Typography>
									TIPO VEHICULO: {props.spare.typeVehicle}
								</Typography>
							</Grid>
							<Grid item md={4} xs={12}>
								<Typography>PRECIO: {props.spare.price}Bs.</Typography>
							</Grid>
							<Grid item md={3} xs={12}>
								<TextValidator
									fullWidth
									label="Cantidad"
									validators={["required",'minNumber:1', 'maxNumber:15']}
									errorMessages={["La cantidad es requerida",'Valor minimo 1','Valor maximo 15']}
									type="number"
									onChange={handleInputChange}
									name="countQuotation"
									value={spare.countQuotation}
								/>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={props.handleClose}
							color="secondary"
							endIcon={<Icon>cancel</Icon>}
						>
							Cancelar
						</Button>
						<Button type="submit" color="primary" endIcon={<Icon>send</Icon>}>
							Añadir
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</div>
	);
};
const MapStateToProps=(state)=>({})
const MapDispachToProps = dispatch => ({
	addSpareToRedux(spare) {
		dispatch(addSpare(spare))
	}
});

export default connect(MapStateToProps,MapDispachToProps)(AddSpareToQuatation);
