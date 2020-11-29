import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

function FilterButtonModel(props) {
	let options = ["Todos"];
	const [value, setValue] = useState(options[0]);
	const [model, setModel] = useState([]);
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/category/${props.id}/autoparts/${props.filterBy}`
			)
			.then((resp) => {
				setModel(resp.data);
			});
		// eslint-disable-next-line
	}, [props.filterBy]);
	options = model;
	return (
		<Autocomplete
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
				props.handleOnSelectOption(
					props.filterCriteria,
					props.filterBy,
					newValue
				);
			}}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			options={options}
			style={{ width: 264 }}
			filterSelectedOptions
			size="small"
			disabled={props.disabled}
			renderInput={(params) => (
				<TextField {...params} label="Modelo vehiculo" variant="outlined" />
			)}
		/>
	);
}
export default FilterButtonModel;
