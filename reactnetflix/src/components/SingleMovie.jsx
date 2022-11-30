import { Col, Card, Button } from "react-bootstrap";

const SingleMovie = (props) => {
  return (
    <Col xs={12} md={2}>
      <Card>
        <Card.Img variant="top" src={props.src} style={{ height: "350px" }} />
        <Card.Body>
          <Button variant="success">Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleMovie;
