import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Icon from "@material-ui/core/Icon";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AddNewSpare = (props) => {
	const initialSpare = {
		idCategory: 1,
		name: "",
		markSpare: "",
		description: "",
		price: 0,
		typeVehicle: "",
		markVehicle: "",
		modelVehicle: "",
		imageName: "",
		imageSrc: "",
		imageFile: null
	};
	const [open, setOpen] = useState(false);
	const [newSpare, setNewSpare] = useState(initialSpare);
	const [errors, setErrors] = useState({});
	const [categories, setCategories] = useState([]);
	const [options, setOptinos] = useState();
	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_API_URL}/category`).then((response) => {
			setCategories(response.data);
		});
		// eslint-disable-next-line
	}, []);
	const [value, setValue] = useState(null);
	const selectionOptions=()=>{
		let optionsDefault=[];
		categories.map(categorie=>{
			return optionsDefault.push(categorie.name);
		})
		setOptinos(optionsDefault);
	}
	const findIdCategorie=()=>{
		let id=0;
		categories.forEach(categorie => {
			if(categorie.name===value)
				id=categorie.idCategory;
		});
		return id;
	}
	const handleClickOpen = () => {
		setOpen(true);
		selectionOptions();
	};

	const handleClose = () => {
		setNewSpare(initialSpare);
		setOpen(false);
	};

	const handleInputChange = (event) => {
		setNewSpare({
			...newSpare,
			[event.target.name]: event.target.value
		});
	};
	const validate = () => {
		let temp = {};
		temp.imageSrc = newSpare.imageSrc === "" ? false : true;
		temp.value = value === null ? false : true;
		setErrors(temp);
		return Object.values(temp).every((x) => x === true);
	};
	const resetForm = () => {
		setNewSpare(initialSpare);
		setErrors({});
	};
	const OnAddNewSpare = (event) => {
		event.preventDefault();
		if (validate()) {
			setOpen(false);
			const formData = new FormData();
			formData.append("idCategory", findIdCategorie());
			formData.append("name", newSpare.name);
			formData.append("markSpare", newSpare.markSpare);
			formData.append("description", newSpare.description);
			formData.append("price", newSpare.price);
			formData.append("typeVehicle", newSpare.typeVehicle);
			formData.append("markVehicle", newSpare.markVehicle);
			formData.append("modelVehicle", newSpare.modelVehicle);
			formData.append("imageName", newSpare.imageName);
			formData.append("imageFile", newSpare.imageFile);
			props.addSpare(formData, resetForm);
		}
	};
	const applyErrorClass = (field) =>
		field in errors && errors[field] === false ? " invalid-field" : "";

	const showPreview = (e) => {
		if (e.target.files && e.target.files[0]) {
			let imageFile = e.target.files[0];
			const reader = new FileReader();
			reader.onload = (x) => {
				setNewSpare({
					...newSpare,
					imageFile,
					imageSrc: x.target.result
				});
			};
			reader.readAsDataURL(imageFile);
		} else {
			setNewSpare({
				...newSpare,
				imageFile: null,
				imageSrc: ""
			});
		}
	};
	const useStyles = makeStyles((theme) => ({
		paper: {
			border: "10px solid #000"
		}
	}));
	const classes = useStyles();

	return (
		<>
			<Button
				variant="contained"
				color="primary"
				onClick={handleClickOpen}
				startIcon={<AddCircleIcon />}
			>
				Añadir Repuesto
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				fullWidth
				maxWidth="md"
				className={classes.paper}
			>
				<ValidatorForm onSubmit={OnAddNewSpare}>
					<DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
						AÑADIR REPUESTO
					</DialogTitle>
					<DialogContent>
						<Grid container spacing={2} alignItems="center">
							<Grid item md={12} xs={12} style={{ textAlign: "center" }}>
								<img
									src={newSpare.imageSrc}
									className="card-img-top"
									alt="Images"
									style={{ maxWidth: 400, height: 300 }}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<div className="form-group col-md-6 offset-md-4 ">
									<input
										multiple
										type="file"
										accept="image/*"
										className={
											"form-control-file" + applyErrorClass("imageSrc")
										}
										onChange={showPreview}
										style={{display: 'none'}}
										id="image-uploader"
									/>
									<label htmlFor="image-uploader">
										<Button component="span" 
										variant="contained"
										style={{color : "#24618c"}}
										className={classes.button}
										startIcon={<CloudUploadIcon />}
										>
											{"Cargue una imagen"}
										</Button>
									</label>
								</div>
							</Grid>
							<Grid item md={4} xs={12}>
								<TextValidator
									fullWidth
									autoFocus
									label="Nombre del Repuesto"
									validators={["required"]}
									errorMessages={["El nombre es requerido"]}
									type="text"
									onChange={handleInputChange}
									name="name"
									value={newSpare.name}
								/>
							</Grid>
							<Grid item md={3} xs={8}>
								<TextValidator
									fullWidth
									label="Marca Repuesto"
									validators={["required"]}
									errorMessages={["La marca es requerida"]}
									type="text"
									onChange={handleInputChange}
									name="markSpare"
									value={newSpare.markSpare}
								/>
							</Grid>
							<Grid item md={2} xs={4}>
								<TextValidator
									fullWidth
									label="Precio Bs."
									validators={["required"]}
									errorMessages={["El Precio es requerido"]}
									type="number"
									onChange={handleInputChange}
									name="price"
									value={newSpare.price}
								/>
							</Grid>
							<Grid item md={3} xs={12}>
								<TextValidator
									fullWidth
									label="Tipo de Vehiculo"
									validators={["required"]}
									errorMessages={["El Tipo de vehiculo es requerido"]}
									type="text"
									onChange={handleInputChange}
									name="typeVehicle"
									value={newSpare.typeVehicle}
								/>
							</Grid>
							<Grid item md={3} xs={12}>
								<TextValidator
									fullWidth
									label="Marca de Vehiculo"
									validators={["required"]}
									errorMessages={["La marca de vehiculo es requerida"]}
									type="text"
									onChange={handleInputChange}
									name="markVehicle"
									value={newSpare.markVehicle}
								/>
							</Grid>
							<Grid item md={4} xs={12}>
								<TextValidator
									fullWidth
									label="Modelo de Vehiculo"
									validators={["required"]}
									errorMessages={["El modelo de vehiculo es requerido"]}
									type="text"
									onChange={handleInputChange}
									name="modelVehicle"
									value={newSpare.modelVehicle}
								/>
							</Grid>
							<Grid item md={3} xs={12}>
								<Autocomplete
									options={options}
									id="controlled-demo"
									value={value}
									disableClearable
									size="small"
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
									renderInput={(params) => (
										<TextField {...params} label="Categoria" margin="normal" />
									)}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextValidator
									fullWidth
									label="Descripcion del repuesto"
									validators={["required"]}
									errorMessages={["La descripcion es requerida"]}
									onChange={handleInputChange}
									type="text"
									name="description"
									value={newSpare.description}
								/>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={handleClose}
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
		</>
	);
};

export default AddNewSpare;