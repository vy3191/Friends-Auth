import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export default function Login(props) {
  const defaultCredentials = {username:"", password:""};
  const [credentials, setCredentials] = useState(defaultCredentials);
  const [isLogin, setIsLogin] = useState(false);

  const handleInput = (event) => {
     setCredentials({
        ...credentials, [event.target.name]:event.target.value
     });
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(credentials)
    axios.post('http://localhost:5000/api/login', {
             username: credentials.username,
             password: credentials.password
          })
          .then( response => {
             const token = response.data.payload;
             localStorage.setItem('token', token);  
               props.history.push('/loading');
             if(token) {
               setTimeout(() =>{
                props.history.push('/friends-list');
               },1000);
             } 
          })
          .catch( error => {
             console.log(error);
          })
     console.log(credentials);
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron>              
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
