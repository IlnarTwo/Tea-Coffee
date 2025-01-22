import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Col, Form, Row } from "react-bootstrap";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passw: ""
    };

    this.onForm = this.onForm.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassw = this.handleChangePassw.bind(this);
  }

  async onForm(event) {
    event.preventDefault();

    const info = {
      email: this.state.email,
      passw: this.state.passw
    };

    try {
      const response = await fetch("http://127.0.0.1/server/php/auth.php", {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });

      await response.json().then(res => {
        console.log(res);
      });
    } catch (e) {
      console.error(e);
    }

    console.log(info);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassw(event) {
    this.setState({ passw: event.target.value });
  }

  render() {
    return (
      <div>
        <Header title="Авторизация" />
        <div className="container">
          <Form onSubmit={this.onForm} method="post" className="col-md-8 mx-auto">
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
        <Footer />
      </div>
    );
  }
}

export default Auth;