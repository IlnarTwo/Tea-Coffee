import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button, Col, Form, Row } from "react-bootstrap";

class Payment extends React.Component{
  render(){
    return(
      <div>
        <Header title="Оплата" />
        <div className="container">
        <Form onSubmit={this.onForm} method="post" className="col-md-8 mx-auto">
            <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthPassw">
              <Form.Label column sm="2">
                Card
              </Form.Label>
              <Col sm="5">
                <Form.Control 
                  type="password" 
                  name="passw" 
                  onChange={this.handleChangePassw} 
                />
              </Col>
            </Form.Group>
            <Button type="submit" className="col-md-5 mx-auto">
              Buy
            </Button>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Payment