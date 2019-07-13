import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import "./ElementOne.css";
function ElementOne() {
  return (
    <div>
      <Jumbotron fluid className="mt-5 jumbo-bg">
        <Container fluid>
          <h1 className="display-3">Some advertisement</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default ElementOne;
