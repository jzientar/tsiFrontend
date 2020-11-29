import { ADD_SPARE, DELETE_SPARE, UPDATE_SPARE } from "./actions";

const addSpare = (spare) => ({
	type: ADD_SPARE,
	data: spare
});

const deleteSpare = (id) => ({
	type: DELETE_SPARE,
	data: id
});

const updateSpare = (spare) => ({
	type: UPDATE_SPARE,
	data: spare
});

export {addSpare,deleteSpare,updateSpare}
