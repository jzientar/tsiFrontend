import React,{useState,useEffect} from 'react';
import { connect } from "react-redux";
import { updateSpare } from "../../../Components/Redux/actionsCreators";

const SpareQuotation = props => {
  const [spare, setSpare] = useState(props.spare);

  const handleInputChange = (event) => {
		setSpare({
			...spare,
			[event.target.name]: event.target.value
    });
  };
  useEffect(() => {
    props.updateSpareToRedux(spare)
    // eslint-disable-next-line
  }, [spare.countQuotation]);
  return (
    <div>
      <div className="row mb-4">
								<div className="col-md-5 col-lg-3 col-xl-3">
									<div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
										<img
											className="img-fluid w-100"
											src={props.spare.imageSrc}
											alt="Sample"
										/>
									</div>
								</div>
								<div className="col-md-7 col-lg-9 col-xl-9">
									<div>
										<div className="d-flex justify-content-between">
											<div>
												<h5>{props.spare.name}</h5>
												<p className="mb-3 text-muted text-uppercase small">
													Marca: {props.spare.markSpare}
												</p>
												<p className="mb-2 text-muted text-uppercase small">
													Vehiculo: {props.spare.markVehicle}
												</p>
												<p className="mb-3 text-muted text-uppercase small">
													Modelo: {props.spare.modelVehicle}
												</p>
											</div>
											<div>
												<div className="def-number-input number-input safari_only mb-0 w-100">
													<input
														className="quantity"
														min="1"
                            max="15"
                            onChange={handleInputChange}
														name="countQuotation"
									          value={spare.countQuotation}
														type="number"
													/>
												</div>
											</div>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<div>
												<span
													type="button"
													className="card-link-secondary small text-uppercase mr-3"
                          onClick={()=>props.deleteSpare(props.spare.idSpare)}
												>
													<i className="fas fa-trash-alt mr-1"></i> Quitar Repuesto{" "}
												</span>
											</div>
											<p className="mb-0" >
												<span>
													<strong id="summary">{props.spare.price+" Bs."}</strong>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<hr className="mb-4" />
    </div>
  );
};

const MapStateToProps = (state) => ({});
const MapDispachToProps = (dispatch) => ({
	updateSpareToRedux(spare) {
		dispatch(updateSpare(spare));
	}
});
export default connect(MapStateToProps,MapDispachToProps)(SpareQuotation);