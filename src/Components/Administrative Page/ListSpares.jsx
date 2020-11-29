import React, { useState, useEffect } from "react";
import Spare from "./Spare.jsx";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import AddNewSpare from "./AddNewSpare.jsx";

export default function ListSpares() {
	const [listSpares, setlistSpares] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		refreshSpareList();
		// eslint-disable-next-line
	}, []);

	const sparesAPI = (url = `${process.env.REACT_APP_API_URL}/AutoParts/`) => {
		return {
			fetchAll: () => axios.get(url),
			create: (newRecord) => axios.post(url, newRecord),
			update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
			delete: (id) => axios.delete(url + id)
		};
	};

	function refreshSpareList() {
		sparesAPI()
			.fetchAll()
			.then((res) => {
				setlistSpares(res.data);
			})
			.catch((err) => console.log(err));
	}

	const updateSpare = (formData) => {
		sparesAPI()
			.update(formData.get("idSpare"), formData)
			.then((res) => {
				refreshSpareList();
			})
			.catch((err) => console.log(err));
	};

	const addSpare = (fromDataNew, resetForm) => {
		sparesAPI()
			.create(fromDataNew)
			.then((res) => {
				resetForm();
				refreshSpareList();
			})
			.catch((err) => console.log(err));
	};

	const deleteSpare = (e, id) => {
		e.stopPropagation();
		if (window.confirm("Esta seguro de borrar este repuesto?"))
			sparesAPI()
				.delete(id)
				.then((res) => refreshSpareList())
				.catch((err) => console.log(err));
	};

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredSapares = listSpares.filter((spare) => {
		return spare.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	});

	const mapListSpares = (spares) => {
		return spares.map((spare, index) => {
			return (
				<Spare
					id={spare.idSpare}
					spare={spare}
					key={spare.idSpare}
					updateSpare={updateSpare}
					deleteSpare={deleteSpare}
				/>
			);
		});
	};
	return (
		<>
			<Grid container spacing={2} justify="center">
				<Grid item md={6} xs={12}>
					<AddNewSpare addSpare={addSpare} />
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
				{mapListSpares(filteredSapares)}
			</Grid>
		</>
	);
}
