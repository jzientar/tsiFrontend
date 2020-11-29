import Axios from "axios";
import React, { useState, useEffect } from "react";
import Categories from "./Categories";

const ListCategories = () => {
	const [state, setState] = useState({ categories: [] });
	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_API_URL}/category`).then((response) => {
			setState({ categories: response.data });
		});
		// eslint-disable-next-line
	}, []);

	return (
		<div
			style={{ marginTop: "100px" }}
			className="row row-cols-1 row-cols-md-4 justify-content-center"
		>
			{state.categories.map((category, index) => {
				return (
					<Categories
						key={category.idCategory}
						id={category.idCategory}
						name={category.name}
						image={category.imageSrc}
					></Categories>
				);
			})}
		</div>
	);
};
export default ListCategories;
