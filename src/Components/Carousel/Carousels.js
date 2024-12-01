import Carousel from "react-bootstrap/Carousel";
import "./Carousels.css";
import { Image } from "react-bootstrap";

function Carousels({ img1, img2, img3 }) {
  return (
    <Carousel className="my-carousel">
      <Carousel.Item>
        <Image className="project-image" src={img1} />
      </Carousel.Item>
      <Carousel.Item>
        <Image className="project-image" src={img2} />
      </Carousel.Item>
      <Carousel.Item>
        <Image className="project-image" src={img3} />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
