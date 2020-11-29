import React,{ useState } from 'react';
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


const EditCategory = props => {
  const [open, setOpen] = useState(false);
	const [editCategory, setEditCategory] = useState(props.category);
  const category = props.category;

  const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setEditCategory(category);
		setOpen(false);
  };

  const handleInputChange = (event) => {
		setEditCategory({
			...editCategory,
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
				setEditCategory({
					...editCategory,
					imageFile,
					imageSrc: x.target.result
				});
			};
			reader.readAsDataURL(imageFile);
		} else {
			setEditCategory({
				...editCategory,
				imageFile: null
			});
		}
  };
  
  const OnEditCategory = (event) => {
		event.preventDefault();
		setOpen(false);
		const formData = new FormData();
		formData.append("idCategory", editCategory.idCategory);
		formData.append("idSpare", editCategory.idSpare);
		formData.append("name", editCategory.name);
		formData.append("description", editCategory.description);
		formData.append("imageName", editCategory.imageName);
		formData.append("imageFile", editCategory.imageFile);
		props.updateCategory(formData);
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
				<ValidatorForm onSubmit={OnEditCategory}>
					<DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
						EDITAR CATEGORIA
					</DialogTitle>
					<DialogContent>
						<DialogContentText></DialogContentText>
						<Grid container spacing={3} justify="center">
							<Grid item md={12} xs={12} style={{ textAlign: "center" }}>
								<img
									src={editCategory.imageSrc}
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
							<Grid item md={4} xs={12} >
								<TextValidator
									fullWidth
									autoFocus
									label="Nombre Categoria"
									validators={["required"]}
									errorMessages={["El nombre es requerido"]}
									type="text"
									onChange={handleInputChange}
									name="name"
									value={editCategory.name}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextValidator
									fullWidth
									autoFocus
									label="Descripcion"
									validators={["required"]}
									errorMessages={["La descripcion es requerida"]}
									type="text"
									onChange={handleInputChange}
									name="description"
									value={editCategory.description}
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
};


export default EditCategory;