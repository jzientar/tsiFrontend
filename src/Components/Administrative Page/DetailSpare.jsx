import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function DetailSpare(props) {
	const [open, setOpen] = useState(false);
	const [editSpare, setEditSpare] = useState(props.spare);
	const spare = props.spare;
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
	const findNameCategorie=(idCategory)=>{
		let name="";
		categories.forEach(categorie => {
			if(categorie.idCategory===idCategory)
				name=categorie.name;
		});
		setValue(name);
	}
	const handleClickOpen = () => {
		selectionOptions();
		findNameCategorie(spare.idCategory);
		setOpen(true);
	};

	const handleClose = () => {
		setEditSpare(spare);
		setOpen(false);
	};

	const handleInputChange = (event) => {
		setEditSpare({
			...editSpare,
			[event.target.name]: event.target.value
		});
	};

	const useStyles = makeStyles((theme) => ({
		paper: {
			border: "10px solid #000"
		}
	}));

	const showPreview = (e) => {
		if (e.target.files && e.target.files[0]) {
			let imageFile = e.target.files[0];
			const reader = new FileReader();
			reader.onload = (x) => {
				setEditSpare({
					...editSpare,
					imageFile,
					imageSrc: x.target.result
				});
			};
			reader.readAsDataURL(imageFile);
		} else {
			setEditSpare({
				...editSpare,
				imageFile: null
			});
		}
	};

	const OnEditSpare = (event) => {
		event.preventDefault();
		setOpen(false);
		const formData = new FormData();
		formData.append("idSpare", editSpare.idSpare);
		formData.append("idCategory", findIdCategorie());
		formData.append("name", editSpare.name);
		formData.append("markSpare", editSpare.markSpare);
		formData.append("description", editSpare.description);
		formData.append("price", editSpare.price);
		formData.append("typeVehicle", editSpare.typeVehicle);
		formData.append("markVehicle", editSpare.markVehicle);
		formData.append("modelVehicle", editSpare.modelVehicle);
		formData.append("imageName", editSpare.imageName);
		formData.append("imageFile", editSpare.imageFile);
		props.updateSpare(formData);
	};
	const classes = useStyles();
	return (
		<>
			<Button
				variant="contained"
				color="primary"
				size="small"
				onClick={handleClickOpen}
				startIcon={<EditIcon />}
			>
				EDITAR
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				fullWidth
				maxWidth="md"
				className={classes.paper}
			>
				<ValidatorForm onSubmit={OnEditSpare}>
					<DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
						EDITAR REPUESTO
					</DialogTitle>
					<DialogContent>
						<DialogContentText></DialogContentText>
						<Grid container spacing={3} alignItems="center">
							<Grid item md={12} xs={12} style={{ textAlign: "center" }}>
								<img
									src={editSpare.imageSrc}
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
										className={"form-control-file"}
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
											Cargue una imagen
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
									value={editSpare.name}
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
									value={editSpare.markSpare}
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
									value={editSpare.price}
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
									value={editSpare.typeVehicle}
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
									value={editSpare.markVehicle}
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
									value={editSpare.modelVehicle}
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
									name="description"
									value={editSpare.description}
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
						<Button color="primary" type="submit" endIcon={<Icon>send</Icon>}>
							Editar
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</>
	);
}

export default DetailSpare;
