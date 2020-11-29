import React, { useState,useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios"; 
function FilterButton(props) {
	let options = ["Todos"];
	const [value, setValue] = useState(options[0]);
	const [brand, setBrand] = useState(["Todos"]);
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/category/${props.id}/autoparts/brand`)
			.then((resp) =>setBrand(brand.concat(resp.data)));
		// eslint-disable-next-line
	}, []);
	options=brand;
	return (
		<>
		<Autocomplete
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
				props.handleOnSelectOption(props.filterCriteria, newValue);
			}}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			id="controllable-states-demo"
			options={options}
			style={{ width: 264 }}
			filterSelectedOptions
			size="small"
			renderInput={(params) => (
				<TextField {...params} label="Marca de vehiculo" variant="outlined" />
			)}
		/>
		</>
	);
}
export default FilterButton;
