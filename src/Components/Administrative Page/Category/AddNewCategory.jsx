import React, { useState } from 'react';
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

const AddNewCategory = props => {
  const initialCategory = {
		idCategory: 0,
		name: "",
		description: "",
		imageName: "",
		imageSrc: "",
		imageFile: null
  };

  const [open, setOpen] = useState(false);
	const [newCategory, setNewCategory] = useState(initialCategory);
  const [errors, setErrors] = useState({});
  const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setNewCategory(initialCategory);
		setOpen(false);
  };

  const handleInputChange = (event) => {
		setNewCategory({
			...newCategory,
			[event.target.name]: event.target.value
		});
  };
  
	const validate = () => {
		let temp = {};
		temp.imageSrc = newCategory.imageSrc === "" ? false : true;
		setErrors(temp);
		return Object.values(temp).every((x) => x === true);
  };
  
  const resetForm = () => {
		setNewCategory(initialCategory);
		setErrors({});
  };

  const OnAddNewCategory = (event) => {
		event.preventDefault();
		if (validate()) {
			setOpen(false);
			const formData = new FormData();
			formData.append("idCategory", newCategory.idCategory);
			formData.append("name", newCategory.name);
			formData.append("description", newCategory.description);
			formData.append("imageName", newCategory.imageName);
			formData.append("imageFile", newCategory.imageFile);
			props.addCategory(formData, resetForm);
		}
  };
  const applyErrorClass = (field) =>
		field in errors && errors[field] === false ? " invalid-field" : "";

	const showPreview = (e) => {
		if (e.target.files && e.target.files[0]) {
			let imageFile = e.target.files[0];
			const reader = new FileReader();
			reader.onload = (x) => {
				setNewCategory({
					...newCategory,
					imageFile,
					imageSrc: x.target.result
				});
			};
			reader.readAsDataURL(imageFile);
		} else {
			setNewCategory({
				...newCategory,
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
				Añadir Categoria
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				fullWidth
				maxWidth="md"
				className={classes.paper}
			>
				<ValidatorForm onSubmit={OnAddNewCategory}>
					<DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
						AÑADIR CATEGORIA
					</DialogTitle>
					<DialogContent>
						<Grid container spacing={2} justify="center">
							<Grid item md={12} xs={12} style={{ textAlign: "center" }}>
								<img
									src={newCategory.imageSrc}
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
									label="Nombre Categoria"
									validators={["required"]}
									errorMessages={["El nombre es requerido"]}
									type="text"
									onChange={handleInputChange}
									name="name"
									value={newCategory.name}
								/>
							</Grid>
              <Grid item md={12} xs={12}>
								<TextValidator
									fullWidth
									label="Descripcion"
									validators={["required"]}
									errorMessages={["La descripcion es requerida"]}
									type="text"
									onChange={handleInputChange}
									name="description"
									value={newCategory.description}
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


export default AddNewCategory;