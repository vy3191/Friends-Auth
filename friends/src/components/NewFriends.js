import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Card, CardBody, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


export default function NewFriends(props) {
  const defaultCredentials = {name:"", age:"", email:""};
  const [credentials, setCredentials] = useState(defaultCredentials);

  const handleInput = (event) => {
     setCredentials({
        ...credentials, [event.target.name]:event.target.value
     });
  };

  const handleSubmit = (event) => {
     event.preventDefault();
     axios.post('http://localhost:5000/api/friends',
            {...credentials}, {headers: {authorization:localStorage.getItem("token")}})
          .then( response => {
             console.log(response.data);
             props.update(response.data);
             props.history.push('/friends-list');
          })
          .catch( err => {
             console.log(err);
          });
  };

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
                <form onSubmit={handleSubmit}>
                      <input
                        name="name"
                        label="name"
                        placeholder="name"
                        value={credentials.name}
                        onChange={handleInput}
                        type="text"                        
                      />
                      <input
                        name="age"
                        label="age"
                        placeholder="age"
                        value={credentials.age}
                        onChange={handleInput}  
                        type="text"                        
                      />
                      <input
                        name="email"
                        label="email"
                        placeholder="email"
                        value={credentials.email}
                        onChange={handleInput}  
                        type="text"                        
                      />
                      <Button id="submit">Submit</Button>
                    </form>
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
