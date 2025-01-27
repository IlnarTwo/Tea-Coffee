import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button, Col, Form, Row } from "react-bootstrap";

class Admin extends React.Component{



  render(){
    return(
      <div>
        <Header title="Admin panel" auth={this.props.auth}/>
        <div className="container">
          <div className="rowBlock">
            <div className="col-md-6">
              Здесь возможно инфва об админе или еще что-то пока не придумал
            </div>
            <Form onSubmit={this.onForm} method="post" className="col-md-6 mx-auto">
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    type="email"
                    placeholder="example@email.com"
                    name="email"
                    onChange={this.handleChangeEmail}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthPassw">
                <Form.Label column sm="2">
                  Password
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
                Sign in
              </Button>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Admin