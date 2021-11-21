import { Card, Button, Row, Form, Col,Badge } from "react-bootstrap";
import React,{useState} from "react";
import {useHistory} from "react-router-dom";

export default function RegistrationForm() {
const [ user, setUser] = useState({
  surname:"",
  firstname:"",
  middlename:"",
  email:"",
  password:"",
  phonenumber:""
});

const handleChange = (e) => {
  setUser((prev) => ({
    ...prev,
    ...{[e.target.name]: e.target.value},
  }));
}
  const Signup = () => {
    let item= user;
   
  }
  return (
    <Card className="cardBorder">
      <Card.Body>
        <img src="/ibbul.jpeg" className="imgLogo"/>
        <Card.Title><Badge bg="success">Create New Account</Badge> </Card.Title>
       
       <div className="registrationForm">
       <Card.Text>
          <Row className="mt-2">
            <Col>
              <Form.Control type="text" name = "surname" placeholder="Surname" onChange={handleChange}/>
            </Col>
            <Col>
              <Form.Control type="text" name = "firstname" placeholder="First Name" onChange={handleChange}/>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Control type="email" name ="middlename" placeholder="Middle Name"  onChange={handleChange}/>
            </Col>
            <Col>
              <Form.Control type="tel" name="phonenumber" placeholder="Phone Number" onChange={handleChange}/>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>

              <Form.Control type="email" name="email" placeholder="Email"  onChange={handleChange}/>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}/>
            </Col>
          </Row>
        </Card.Text>
        <Button onClick = {Signup} variant="success" class="btn center">Create Account</Button>
       </div>
      </Card.Body>
    </Card>
  );
}
