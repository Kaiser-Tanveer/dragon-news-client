import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../../Assets/Brands/brand1.png";
import Brand3 from "../../../../Assets/Brands/brand3.png";

const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Brand1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Brand3} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
