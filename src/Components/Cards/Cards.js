import "./Cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import img12 from "../../images/Apache_Spark.png"

function Cards({ title, img }) {
  return (
    <Card className="my-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;
