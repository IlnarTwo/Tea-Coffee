import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button, Col, Form, Row } from "react-bootstrap"

class Regist extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login: "",
      email: "",
      passw: "",
      auth: ""
    }

    this.onForm = this.onForm.bind(this)
    this.handleChangeLogin = this.handleChangeLogin.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassw = this.handleChangePassw.bind(this)
  }

  async onForm(event) {
    event.preventDefault()
    let info = {
      login: this.state.login,
      email: this.state.email,
      passw: this.state.passw,
      auth: false
    }

    try {
      const response = await fetch("http://127.0.0.1/server/php/regist.php", {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(info),
        headers: {
           Accept: 'application/json',
          "Content-Type": "application/json;charset=utf-8"
        }
      });

      await response.json().then(res => {
        console.log(res['auth']);
        this.setState({auth: res['auth']})
        console.log(this.state.auth)
      });
    } catch (e) {
      console.error(e);
    }
  }

  handleChangeLogin(event) {
    this.setState({login: event.target.value})
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value})
  }
  handleChangePassw(event){
    this.setState({passw: event.target.value})
  }

  render(){
    return(
      <div>
        <Header title="Регистрация" auth={this.props.auth}/>
        <div className="container">
          <Form onSubmit={this.onForm} method="post" className="col-md-8 mx-auto">
          <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formRegistLogin">
              <Form.Label column sm="2">
                Login
              </Form.Label>
              <Col sm="5">
              <Form.Control 
                type="text" 
                name="login" 
                onChange={this.handleChangeLogin}
                required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formRegistEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="5">
              <Form.Control 
                type="email" 
                placeholder="exampl@email.com" 
                name="email" 
                onChange={this.handleChangeEmail}
                required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formRegistPassw">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="5">
              <Form.Control 
                type="password" 
                name="passw" 
                onChange={this.handleChangePassw}
                required
                />
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