import React from "react";
import { FaCar } from "react-icons/fa";

const AboutUs = () => (
  <>
    <div
      style={{
        background: "linear-gradient(to right bottom, #969d9e, #2a383b"
      }}
    >
      <div className="container py-5">
        <div className="row h-100 align-items-center py-5">
          <div className="col-lg-6">
            <h1 className="display-4" style={{ color: "#aeb8b2" }}>
              QUIENES SOMOS
            </h1>
            <p className="lead mb-0" style={{ color: "#ebede6" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              iusto doloribus numquam. Quos quibusdam voluptas exercitationem
              fugiat nihil nemo deleniti itaque, non nesciunt eaque pariatur!
              Vel exercitationem tenetur minima laudantium!
            </p>
          </div>
          <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
            <FaCar style={{ width: 200, height: 200 }} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutUs;
