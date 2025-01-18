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
      passw: ""
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
      passw: this.state.passw
    }
    let response = await fetch("http://127.0.0.1/server/php/regist.php", {
      mode: "no-cors",
      method:"POST",
      body: JSON.stringify(info),
      headers: {
       'Content-Type': 'application/json;charset=utf-8'
      }
    })
    .then(response => response.json())
    .then(commits => console.log(commits[0]))

    console.log(info)


    console.log("1234")
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
        <Header title="Регистрация" />
        <div className="container">
          <Form onSubmit={this.onForm} method="post" className="col-md-8 mx-auto">
          <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formRegistLogin">
              <Form.Label column sm="2">
                Login
              </Form.Label>
              <Col sm="5">
              <Form.Control type="text" name="login" onChange={this.handleChangeLogin}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formRegistEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="5">
              <Form.Control type="email" placeholder="exampl@email.com" name="email" onChange={this.handleChangeEmail}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formRegistPassw">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="5">
              <Form.Control type="password" name="passw" onChange={this.handleChangePassw}/>
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