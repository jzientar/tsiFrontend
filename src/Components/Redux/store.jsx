import { createStore } from "redux";
import { ADD_SPARE, DELETE_SPARE, UPDATE_SPARE } from "./actions";

const inicialStoreSpares = {
  spares: [],
  totalCost:0
};
const calculateTotalCost=(spares)=>{
	let total=0;
	spares.forEach(spare => {
		total=total+spare.price*spare.countQuotation;
	});
	return total;
}
const setSpare=(spares,spare)=>{
	spares.find(s=>s.idSpare===spare.idSpare).countQuotation=spare.countQuotation;
	return spares;
}

const spareReducer = (state = inicialStoreSpares, action) => {
	//console.log(action.data)
	switch (action.type) {
		case ADD_SPARE:
			if(state.spares.find(spare=>spare.idSpare===action.data.idSpare))
				return state;
			return {
				...state,
				spares: state.spares.concat(action.data),
				totalCost: calculateTotalCost(state.spares.concat(action.data))
			};
		case DELETE_SPARE:
			return {
				...state,
				spares: state.spares.filter((s) => s.idSpare !== action.data),
				totalCost: calculateTotalCost(state.spares.filter((s) => s.idSpare !== action.data))
			};
		case UPDATE_SPARE:
				return {
					...state,
					spares: setSpare(state.spares,action.data),
					totalCost: calculateTotalCost(setSpare(state.spares,action.data))
				}
		default:
			return state;
  }
};

export default createStore(spareReducer);
