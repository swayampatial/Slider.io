import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <h2>Slick Slider</h2>
  <Slider {...settings}>
  <div>
    <h3>1</h3>
  </div>
  <div>
    <h3>2</h3>
  </div>
  <div>
    <h3>3</h3>
  </div>
  <div>
    <h3>4</h3>
  </div>
  <div>
    <h3>5</h3>
  </div>
  <div>
    <h3>6</h3>
  </div>
</Slider>
  ;
};
