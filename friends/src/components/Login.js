import React from "react";
import { Container, Row, Col, Jumbotron, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Login() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron>
              <h3>
                <u>Login Form</u>
              </h3>
              <hr />
              <Card>
                <CardBody>
                <AvForm>
                      <AvField
                        name="email"
                        label="Email"
                        type="text"
                        validate={{
                          required: true,
                          email: true
                        }}
                      />
                      <AvField
                        name="password"
                        label="Password"
                        type="password"                        
                      />
                      <Button id="submit">Submit</Button>
                    </AvForm>
                </CardBody>
              </Card>
            </Jumbotron>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};
