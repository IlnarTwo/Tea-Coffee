import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import axios from "axios";

class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      email: "",
      passw: "",
      auth: false,
      errorMessage: "", // Сообщение об ошибке
    };

    this.onForm = this.onForm.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassw = this.handleChangePassw.bind(this);
  }

  async onForm(event) {
    event.preventDefault();

    const { login, email, passw } = this.state;

    try {
      const response = await axios.post(
        "http://127.0.0.1/server/php/regist.php",
        {
          login: login,
          email: email,
          passw: passw,
          withcredentials: true,
        }
      );

      if (response.data.auth) {
        localStorage.setItem("jwt", response.data.token);
        // localStorage.setItem('auth', response.data.auth);
        // localStorage.setItem('role', response.data.role);

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        this.setState({ auth: true });
        this.props.navigate("/catalog"); // Перенаправляем на главную страницу
      } else {
        this.setState({ errorMessage: response.data.message });
      }
    } catch (error) {
      console.error(error);
      this.setState({ errorMessage: "Registration failed. Please try again." });
    }
  }

  handleChangeLogin(event) {
    this.setState({ login: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassw(event) {
    this.setState({ passw: event.target.value });
  }

  render() {
    const { login, email, passw, errorMessage } = this.state;

    return (
      <div style={{ backgroundColor: '#f8f5f2', minHeight: '100vh' }}>
        <Header title="Регистрация" auth={this.props.auth} />
        <Container className="py-5">
          <Form
            onSubmit={this.onForm}
            method="post"
            className="col-md-6 mx-auto p-4"
            style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <h2 className="text-center mb-4" style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif' }}>Создайте аккаунт</h2>
            <Form.Group as={Row} className="mb-3" controlId="formRegistLogin">
              <Form.Label column sm="3" style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif' }}>
                Логин
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="login"
                  value={login}
                  onChange={this.handleChangeLogin}
                  required
                  style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formRegistEmail">
              <Form.Label column sm="3" style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif' }}>
                Email
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="email"
                  placeholder="example@email.com"
                  name="email"
                  value={email}
                  onChange={this.handleChangeEmail}
                  required
                  style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formRegistPassw">
              <Form.Label column sm="3" style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif' }}>
                Пароль
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  name="passw"
                  value={passw}
                  onChange={this.handleChangePassw}
                  required
                  style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                />
              </Col>
            </Form.Group>
            {errorMessage && (
              <div className="text-danger text-center mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                {errorMessage}
              </div>
            )}
            <div className="d-grid gap-2">
              <Button
                type="submit"
                className="mt-3"
                style={{ backgroundColor: '#8b7355', borderColor: '#8b7355', borderRadius: '5px', fontFamily: 'Georgia, serif' }}
              >
                Зарегистрироваться
              </Button>
            </div>
          </Form>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Regist