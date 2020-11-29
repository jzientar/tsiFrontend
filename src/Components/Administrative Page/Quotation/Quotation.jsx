import React from "react";
import { connect } from "react-redux";
import { deleteSpare } from "../../../Components/Redux/actionsCreators";
import SpareQuotation from "./SpareQuotation";

const Quotation = (props) => {
	const deleteSpare=(id)=>{
		props.deleteSpareToRedux(id);
	}
	const mapListSpares = () => {
		return props.spares.map((spare, index) => {
			return <SpareQuotation key={index} spare={spare} deleteSpare={deleteSpare} />;
		});
	};
	return (
		<section>
			<div className="row">
				<div className="col-lg-8">
					<div className="mb-3">
						<div className="pt-4 wish-list">
							<h5 className="mb-4">
								Numero de Repuestos (<span>{props.spares.length}</span>)
							</h5>
							{mapListSpares()}
						</div>
					</div>
					<div className="mb-3"></div>
				</div>
				<div className="col-lg-4">
					<div className="mb-3">
						<div className="pt-4">
							<h5 className="mb-3">El costo total es</h5>

							<ul className="list-group list-group-flush">
								{props.spares.map((spare,index)=>(
									<li key={index} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
									{spare.name} x {spare.countQuotation}
									<span>{spare.price * spare.countQuotation} Bs.</span>
								</li>
								))}
								<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
									<div>
										<strong>Costo Total</strong>
									</div>
									<span>
										<strong>{props.totalCost} Bs.</strong>
									</span>
								</li>
							</ul>

							<button type="button" className="btn btn-primary btn-block">
								Descargar Cotizacion
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
const MapStateToProps = (state) => ({
	spares: state.spares,
	totalCost: state.totalCost
});
const MapDispachToProps = (dispatch) => ({
	deleteSpareToRedux(id) {
		dispatch(deleteSpare(id));
	}
});
export default connect(MapStateToProps, MapDispachToProps)(Quotation);
