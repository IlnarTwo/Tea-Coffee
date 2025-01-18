import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button, Col, Form, Row } from "react-bootstrap"

class Regist extends React.Component{
  render(){
    return(
      <div>
        <Header title="Регистрация" />
        <div className="container">
          <Form action={"http://127.0.0.1/server/php/regist.php"} method="post" className="col-md-5 mx-auto">
          <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formRegistLogin">
              <Form.Label column sm="2">
                Login
              </Form.Label>
              <Col sm="5">
              <Form.Control type="text" name="login" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formRegistEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="5">
              <Form.Control type="email" placeholder="exampl@email.com" name="email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formRegistPassw">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="5">
              <Form.Control type="password" name="passw" />
              </Col>
            </Form.Group>
            <Button type="submit" className="col-md-5 mx-auto">Regist</Button>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Regist