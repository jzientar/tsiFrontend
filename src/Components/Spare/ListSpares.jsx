import React, { Component } from "react";
import Axios from "axios";
import Spare from "./Spare";
import FilterButton from "./FilterButton";
import FilterButtonModel from "./FilterButtonModel";
import Container from "@material-ui/core/Container";
import Banner from "../Layout/Banner";
import Grid from "@material-ui/core/Grid";

class ListSpares extends Component {
	constructor(props) {
		super(props);
		this.filterRequest = false;
		this.listFiltered = [];
		this.state = {
			spares: [],
			search: "",
			disabled: true,
			filterOptions: {
				filterCriteria: "Todos",
				filterBy: "Todos",
				filterByModel: "Todos"
			}
		};
	}
	componentDidMount() {
		Axios.get(
			`${process.env.REACT_APP_API_URL}/category/${this.props.match.params.id}/autoparts`
		).then((response) => {
			this.listFiltered = response.data;
			this.setState({ spares: response.data });
		});
	}
	listSpares(spares) {
		if (this.filterRequest) {
			this.filterRequest = false;
			if (
				this.state.filterOptions.filterByModel === null ||
				this.state.filterOptions.filterByModel === "Todos"
			) {
				return this.mapListSpares(
					this.filterByMarkVehicle(
						this.state.filterOptions.filterBy.toLowerCase()
					)
				);
			}
			if (
				this.state.filterOptions.filterBy === null ||
				this.state.filterOptions.filterBy === "Todos"
			) {
				this.setState({ disabled: true });
				this.listFiltered = this.state.spares;
				return this.mapListSpares(this.listFiltered);
			} else {
				switch (this.state.filterOptions.filterCriteria) {
					case "MarkVehicle":
						return this.mapListSpares(
							this.filterByMarkVehicle(
								this.state.filterOptions.filterBy.toLowerCase()
							)
						);
					case "ModelVehicle":
						return this.mapListSpares(
							this.filterByMaodelVehicle(
								this.state.filterOptions.filterByModel.toLowerCase()
							)
						);
					default:
				}
			}
		} else return this.mapListSpares(spares);
	}
	mapListSpares(spares) {
		return spares.map((spare, index) => {
			return (
				<Spare
					id={spare.idSpare}
					name={spare.name}
					description={spare.description}
					image={spare.imageSrc}
					key={spare.idSpare}
				/>
			);
		});
	}
	onChange = (e) => {
		this.setState({ search: e.target.value });
	};

	filterByMarkVehicle(filterBy) {
		let listFiltered = [];
		this.state.spares.forEach((spare) => {
			if (spare.markVehicle.toLowerCase() === filterBy) {
				listFiltered.push(spare);
			}
		});
		this.listFiltered = listFiltered;
		return listFiltered;
	}

	filterByMaodelVehicle(filterByModel) {
		let listFiltered = [];
		this.state.spares.forEach((spare) => {
			if (
				spare.markVehicle.toLowerCase() ===
					this.state.filterOptions.filterBy.toLowerCase() &&
				spare.modelVehicle.toLowerCase() === filterByModel
			) {
				listFiltered.push(spare);
			}
		});
		this.listFiltered = listFiltered;
		return listFiltered;
	}

	handleOnSelectOption = (filterCriteria, filterby, filterByModel) => {
		this.filterRequest = true;
		this.setState({
			disabled: false,
			filterOptions: {
				filterCriteria: filterCriteria,
				filterBy: filterby,
				filterByModel: filterByModel
			}
		});
	};
	render() {
		const filteredSapares = this.listFiltered.filter((spare) => {
			return (
				spare.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
			);
		});
		return (
			<>
				<Banner path="Repuestos" />
				<Container maxWidth="lg" style={{ margin: "40px"}}>
				<Grid container spacing={2} >
					<Grid item lg={4} md={4} xs={12}>
						<FilterButton
							handleOnSelectOption={this.handleOnSelectOption}
							filterCriteria="MarkVehicle"
							id={this.props.match.params.id}
						/>
					</Grid>
					<Grid item lg={4} md={4} xs={12}>
						<FilterButtonModel
							handleOnSelectOption={this.handleOnSelectOption}
							filterCriteria="ModelVehicle"
							disabled={this.state.disabled}
							filterBy={this.state.filterOptions.filterBy}
							id={this.props.match.params.id}
						/>
					</Grid>
					<Grid item lg={4} md={4} xs={12}>
						<form className="form-inline ">
							<i className="fas fa-search fa-lg" aria-hidden="true"></i>
							<input
								className="form-control form-control-sm ml-3 w-75 "
								type="text"
								placeholder="Search"
								aria-label="Search"
								onChange={this.onChange}
								style={{ height: 40 }}
							/>
						</form>
					</Grid>
				</Grid>
				</Container>
				<div
					style={{ marginTop: "100px" }}
					className="row row-cols-1 row-cols-md-4 justify-content-center"
				>
					{this.listSpares(filteredSapares)}
				</div>
			</>
		);
	}
}

export default ListSpares;
