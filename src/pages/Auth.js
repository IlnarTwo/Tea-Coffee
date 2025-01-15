import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button, Col, Form, Row } from "react-bootstrap"

class Auth extends React.Component{
  render(){
    return(
      <div>
        <Header title="Авторизация" />
        <div className="container">
          <Form onSubmit={".../php/auth.php"} method="post" className="col-md-5 mx-auto">
            <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuth">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="5">
              <Form.Control type="email" placeholder="exampl@email.com" name="email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuth">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="5">
              <Form.Control type="password" name="passw" />
              </Col>
            </Form.Group>
            <Button type="submit" className="col-md-5 mx-auto">Sign in</Button>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Auth