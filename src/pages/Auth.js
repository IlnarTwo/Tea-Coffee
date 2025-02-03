import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import axios from "axios";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passw: "",
      auth: false
    };

    this.onForm = this.onForm.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassw = this.handleChangePassw.bind(this);
  }

  async onForm(event) {
    event.preventDefault();

    var self = this;

    axios.post("http://127.0.0.1/server/php/auth.php", {
      email: this.state.email,
      passw: this.state.passw,
      withcredentials: true
    })
    .then((response) => {
      console.log(response);
      if (response.data.auth) {
        // Сохраняем JWT в localStorage
        console.log(response.data.token)
        localStorage.setItem('jwt', response.data.token);
        self.setState({ auth: true });
      }
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(this.state.auth)
    console.log(localStorage)
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassw(event) {
    this.setState({ passw: event.target.value });
  }

  // Пример функции для выполнения запроса с JWT
  // async fetchProtectedData() {
  //   const jwt = localStorage.getItem('jwt');
  //   if (!jwt) {
  //     console.error('JWT not found');
  //     return;
  //   }

  //   try {
  //     const response = await axios.get("http://127.0.0.1/server/php/protected.php", {
  //       headers: {
  //         Authorization: `Bearer ${jwt}`
  //       }
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  render() {
    return (
      <div style={{ backgroundColor: '#f8f5f2', minHeight: '100vh' }}>
        <Header title="Авторизация" auth={this.props.auth} />
        <Container className="py-5">
          <Form onSubmit={this.onForm} method="post" className="col-md-6 mx-auto p-4" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-center mb-4" style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif' }}>Добро пожаловать!</h2>
            <Form.Group as={Row} className="mb-3" controlId="formAuthEmail">
              <Form.Label column sm="3" style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif' }}>
                Email
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="email"
                  placeholder="example@email.com"
                  name="email"
                  onChange={this.handleChangeEmail}
                  style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAuthPassw">
              <Form.Label column sm="3" style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif' }}>
                Пароль
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  name="passw"
                  onChange={this.handleChangePassw}
                  style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                />
              </Col>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button 
                type="submit" 
                className="mt-3" 
                style={{ backgroundColor: '#8b7355', borderColor: '#8b7355', borderRadius: '5px', fontFamily: 'Georgia, serif' }}
              >
                Войти
              </Button>
            </div>
          </Form>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Auth;