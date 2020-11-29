import React,{ useState, useEffect }  from 'react';
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Category from "./Category"
import AddNewCategory from "./AddNewCategory"
const ListCategories = props => {
  const [listCategories, setListCategories] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		refreshCategoriList();
		// eslint-disable-next-line
	}, []);

	const categoriesAPI = (url = `${process.env.REACT_APP_API_URL}/category/`) => {
		return {
			fetchAll: () => axios.get(url),
			create: (newRecord) => axios.post(url, newRecord),
			update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
			delete: (id) => axios.delete(url + id)
		};
  };
  function refreshCategoriList() {
		categoriesAPI()
			.fetchAll()
			.then((res) => {
				setListCategories(res.data);
			})
			.catch((err) => console.log(err));
  }
	
	const updateCategory = (formData) => {
		categoriesAPI()
			.update(formData.get("idCategory"), formData)
			.then((res) => {
				refreshCategoriList();
			})
			.catch((err) => console.log(err));
	};

	const addCategory = (fromDataNew, resetForm) => {
		categoriesAPI()
			.create(fromDataNew)
			.then((res) => {
				resetForm();
				refreshCategoriList();
			})
			.catch((err) => console.log(err));
	};

	const deleteCategory = (e, id) => {
		e.stopPropagation();
		if (window.confirm("Esta seguro de borrar la categoria"))
		categoriesAPI()
				.delete(id)
				.then((res) => refreshCategoriList())
				.catch((err) => console.log(err));
	};

  const onChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCategories = listCategories.filter((categorie) => {
		return categorie.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  
  const mapListCategories = (categories) => {
		return categories.map((category) => {
			return (
				<Category
					id={category.idCategory}
					category={category}
					key={category.idCategory}
					updateCategory={updateCategory}
					deleteCategory={deleteCategory}
				/>
			);
		});
	};
  return (
    <>
			<Grid container spacing={2} justify="center">
				<Grid item md={6} xs={12}>
					<AddNewCategory addCategory={addCategory} />
				</Grid>
				<Grid item md={4} xs={12}>
					<form className="form-inline ">
						<i className="fas fa-search fa-lg" aria-hidden="true"></i>
						<input
							className="form-control form-control-xs ml-3 w-75 "
							type="text"
							placeholder="Search"
							aria-label="Search"
							onChange={onChange}
							style={{ height: 40 }}
						/>
					</form>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				justify="center"
				style={{ marginTop: "50px" }}
			>
				{mapListCategories(filteredCategories)}
			</Grid>
		</>
  );
};

export default ListCategories;