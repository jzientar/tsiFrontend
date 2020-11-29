import React from "react";
import { ImBriefcase } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { GiMagnifyingGlass } from "react-icons/gi";

const EthicalValues = () => (
  <div className="py-5" style={{background: 'linear-gradient(to bottom right, #2a383b, #e3edce)'}}>
    <div className="container py-5">
      <h1 className="display-4" style={{ color: "#aeb8b2" }}>
        NUESTROS VALORES
      </h1>
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 order-2 order-lg-1">
          <h2 className="font-weight-light">Transparencia</h2>
          <p className="font-italic mb-4" style={{ color: "#ebede6" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
          <GiMagnifyingGlass style={{ width: 200, height: 200 }} />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-5 px-5 mx-auto">
          <IoIosPeople style={{ width: 200, height: 200 }} />
        </div>
        <div className="col-lg-6">
          <h2 className="font-weight-light">Honestidad</h2>
          <p className="font-italic mb-4" style={{ color: "#ebede6" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 order-2 order-lg-1">
          <h2 className="font-weight-light">Responsabilidad</h2>
          <p className="font-italic mb-4" style={{ color: "#ebede6" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
          <ImBriefcase style={{ width: 200, height: 200 }} />
        </div>
      </div>
    </div>
  </div>
);

export default EthicalValues;
