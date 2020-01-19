import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "bootstrap/dist/css/bootstrap.min.css";


export default function NewFriends() {
  const defaultCredentials = {username:"", password:""};
  const [credentials, setCredentials] = useState(defaultCredentials);

  const handleInput = (event) => {
     setCredentials({
        ...credentials, [event.target.name]:event.target.value
     });
  };
  const handleSubmit = (event) => {
     event.preventDefault();
     console.log(credentials);
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron>
              <h3>
                <u>Add your new friend here...</u>
              </h3>
              <hr />
              <Card>
                <CardBody>
                <AvForm onSubmit={handleSubmit}>
                      <AvField
                        name="username"
                        label="Username"
                        value={credentials.username}
                        onChange={handleInput}
                        type="text"                        
                      />
                      <AvField
                        name="password"
                        label="Password"
                        value={credentials.username}
                        onChange={handleInput}  
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
