import React from "react";
import { GrOverview } from "react-icons/gr";
import { GiRoad } from "react-icons/gi";
import { ImSun } from "react-icons/im";
//#e4edce, #2a383b)"
const MissionVisionObjective = () => (
  <div
    className="py-5"
    style={{
      background: "linear-gradient(to right bottom, #969d9e, #2a383b)"
    }}
  >
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-5">
          <h1 className="display-4 " style={{ color: "#aeb8b2" }}>
            MISION, VISION, OBJETIVO
          </h1>
          <p className="font-italic" style={{ color: "#ebede6" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <section className="text-center about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <ImSun style={{ width: 50, height: 50 }} />
              <h2>Mision</h2>
              <p className="lead" style={{ color: "#ebede6" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
            <div
              className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <GrOverview style={{ width: 50, height: 50 }} />
              <h2>Vision </h2>
              <p className="lead" style={{ color: "#ebede6" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum{" "}
              </p>
            </div>
            <div className="clearfix visible-md-block visible-sm-block"></div>
            <div
              className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <GiRoad style={{ width: 50, height: 50 }} />
              <h2>Objetivo</h2>
              <p className="lead" style={{ color: "#ebede6" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default MissionVisionObjective;
