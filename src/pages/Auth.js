import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router"; // Используем useNavigate из react-router-dom

const Auth = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const navigate = useNavigate(); // Хук для навигации

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassw = (event) => {
    setPassw(event.target.value);
  };

  const onForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1/server/php/auth.php", {
        email: email,
        passw: passw,
        withcredentials: true,
      });

      console.log(response);
      if (response.data.auth) {
        // Сохраняем JWT в localStorage
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("auth", response.data.auth);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("email", email);
        console.log(response.data)

        // Устанавливаем заголовок авторизации для axios
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

        // Перенаправляем на страницу каталога
        navigate("/catalog"); // Используем navigate для перенаправления
      }
    } catch (error) {
      console.log("Ошибка при авторизации:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
      <Header title="Авторизация" auth={auth} />
      <Container className="py-5">
        <Form
          onSubmit={onForm}
          method="post"
          className="col-md-6 mx-auto p-4"
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            className="text-center mb-4"
            style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
          >
            Добро пожаловать!
          </h2>
          <Form.Group as={Row} className="mb-3" controlId="formAuthEmail">
            <Form.Label
              column
              sm="3"
              style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
            >
              Email
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="email"
                placeholder="example@email.com"
                name="email"
                onChange={handleChangeEmail}
                required
                style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formAuthPassw">
            <Form.Label
              column
              sm="3"
              style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
            >
              Пароль
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="password"
                name="passw"
                onChange={handleChangePassw}
                required
                style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
              />
            </Col>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              type="submit"
              style={{
                backgroundColor: "#8b7355",
                borderColor: "#8b7355",
                borderRadius: "5px",
                fontFamily: "Georgia, serif",
              }}
            >
              Войти
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Auth;