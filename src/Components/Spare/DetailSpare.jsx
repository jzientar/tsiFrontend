import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Table from "react-bootstrap/Table";
import _ from "lodash";
import Banner from "../Layout/Banner";
import { useHistory } from "react-router-dom";

const DetailSpare = ({ match }) => {
  const [state, setState] = useState({});
  let history = useHistory();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/AutoParts/${match.params.id}`)
      .then((resp) => setState(resp.data));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Banner path="Detalle" />
      <div className="container" style={{ marginTop: "100px" }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.goBack()}
        >
          VOLVER
        </Button>
        <section className="mb-5">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div id="mdb-lightbox-ui"></div>
              <div className="mdb-lightbox">
                <div className="row product-gallery mx-1">
                  <div className="col-12 mb-0">
                    <h2 style={{ textAlign: "center" }}>
                      {_.toUpper(state.name)}
                    </h2>
                    <figure
                      className="view overlay rounded z-depth-1 main-img"
                      style={{ marginTop: "55px" }}
                    >
                      <img
                        src={state.imageSrc}
                        className="img-fluid z-depth-1"
                        alt="detail"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{
                marginBottom: "100px",
                border: "1px solid",
                padding: "100px"
              }}
            >
              <strong>Motor</strong>
              <ul className="rating"></ul>
              <p className="pt-1">{_.toUpper(state.description)}</p>
              <div className="table-responsive">
                <Table className="table table-sm table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th className="pl-0 w-25" scope="row">
                        <strong>Marca</strong>
                      </th>
                      <td>{_.startCase(state.markSpare)}</td>
                    </tr>
                    <tr>
                      <th className="pl-0 w-25" scope="row">
                        <strong>Tipo de vehiculo</strong>
                      </th>
                      <td>{_.startCase(state.typeVehicle)}</td>
                    </tr>
                    <tr>
                      <th className="pl-0 w-25" scope="row">
                        <strong>Marca de vehiculo</strong>
                      </th>
                      <td>{_.startCase(state.markVehicle)}</td>
                    </tr>
                    <tr>
                      <th className="pl-0 w-25" scope="row">
                        <strong>Modelo de vehiculo</strong>
                      </th>
                      <td>{_.startCase(state.modelVehicle)}</td>
                    </tr>
                  </tbody>
                </Table>
								<br/>
								<br/>
								<p className="pl-0">
                  <strong>PRECIO</strong> <strong>{state.price} Bs </strong>
              	</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailSpare;
