import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner from "../Layout/Images/toyota-hiace-banner-diseno-1920x1000-optimizada.jpg"
import banner3 from "../Layout/Images/banner-seccion-diveusados.jpg"
import banner4 from "../Layout/Images/2013-BMW-M5-F10-LCI-Facelift-Wallpaper-1920-x-1200-011.jpg"
function InitialBanner(props) {
  const styles = {
    minHeight: "100vh",
  };
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="First slide"
          style={styles}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="Third slide"
          style={styles}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="Third slide"
          style={styles}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default InitialBanner;
