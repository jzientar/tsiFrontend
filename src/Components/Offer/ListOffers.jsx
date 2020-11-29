import React, { useState, useEffect } from "react";
import axios from "axios";
import Offer from "./Offer";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const ListOffers = () => {
  const [state, setState] = useState({ offers: [] });
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/Offer`).then((response) => {
      setState({ offers: response.data });
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div
      style={{
        background: "linear-gradient(to right, #005285, #4fa8e0, #005285"
      }}
    >
      <Container
        style={{
          paddingBottom: "100px",
          textAlign: "center",
          backgroundSize: "100%"
        }}
      >
        {state.offers.length === 0 ? (
          <Alert
            severity="info"
            style={{
              position: "relative",
              top: "40px",
              justifyContent: "center",
              padding: "100px"
            }}
          >
            <AlertTitle style={{ fontSize: "35px" }}>
              Aun no tenemos ofertas disponibles
            </AlertTitle>
            Atento a nuestras redes sociales para mas informacion y
            novedades.!!!
          </Alert>
        ) : (
          state.offers.map((offer, index) => {
            return (
              <Offer
                key={offer.idOffer}
                id={offer.idOffer}
                name={offer.name}
                description={offer.description}
                startDate={offer.startDate}
                endDate={offer.endDate}
                imageSrc={offer.imageSrc}
              ></Offer>
            );
          })
        )}
      </Container>
    </div>
  );
};

export default ListOffers;
