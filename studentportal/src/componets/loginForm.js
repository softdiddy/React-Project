import { Card, Button, Row, Form, Col,Badge } from "react-bootstrap";
import React,{useState} from "react";
import {useHistory} from "react-router-dom";

export default function LoginForm() {
  return (
    <Card className="cardBorder">
      <Card.Body>
        <img src="/ibbul.jpeg" className="imgLogo"/>
        <Card.Title><Badge bg="success">Login</Badge> </Card.Title>
       
       <div className="registrationForm">
       <Card.Text>
      
          <Row className="mt-2">
            <Col>

              <Form.Control type="email" name="email" placeholder="Email"  />
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Col>
          </Row>
        </Card.Text>
        <Button variant="success" class="btn">Create Account</Button>
       </div>
      </Card.Body>
    </Card>
  );
}
