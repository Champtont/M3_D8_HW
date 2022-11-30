import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleMovie = (props) => {
  const navigate = useNavigate();

  return (
    <Col xs={12} md={2}>
      <Card className="my-2">
        <Card.Img variant="top" src={props.src} style={{ height: "350px" }} />
        <Card.Body>
          <Button
            variant="success"
            onClick={() => navigate("/details/" + props.id)}
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleMovie;
