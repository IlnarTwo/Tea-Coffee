import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button, Col, Form, Row } from "react-bootstrap"

class Auth extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Form action={"../php/auth.php"} method="post">
          <Form.Group as={Row} className="mb-3" controlId="formAuth">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
            <Form.Control type="email" placeholder="exampl@email.com" name="email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formAuth">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
            <Form.Control type="password" name="passw" />
            </Col>
          </Form.Group>
          <Button type="submit">Sign in</Button>
        </Form>
        <Footer />
      </div>
    )
  }
}

export default Auth