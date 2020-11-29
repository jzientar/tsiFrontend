import React from "react";
import Moment from "react-moment";
import CardMedia from '@material-ui/core/CardMedia';

function Offer(props) {
  return (
    <>
      <div>
        <br />
        <CardMedia>
          <img style={{maxWidth: "1000px",  height: "auto", width :"100%"}} src={props.imageSrc} alt="" />
        </CardMedia>
        <h1>{props.name}</h1>
        <p>
          Oferta vigente desde{" "}
          <Moment format="DD/MM/YYYY">{props.startDate}</Moment> hasta{" "}
          <Moment format="DD/MM/YYYY">{props.endDate}</Moment>
        </p>
      </div>
    </>
  );
}
export default Offer;
