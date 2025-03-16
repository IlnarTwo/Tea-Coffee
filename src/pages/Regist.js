import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router"; // Используем useNavigate для перенаправления

const Regist = ({ auth }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const navigate = useNavigate(); // Хук для навигации

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassw = (event) => {
    setPassw(event.target.value);
  };

  const onForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1/server/php/regist.php", {
        login: login,
        email: email,
        passw: passw,
        withcredentials: true,
      });

      if (response.data.auth) {
        // Сохраняем данные в localStorage
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("auth", response.data.auth);
        localStorage.setItem("role", response.data.roleUser);
        localStorage.setItem("email", response.data.email);

        // Устанавливаем заголовок авторизации для axios
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

        // Перенаправляем на страницу каталога
        navigate("/catalog");
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
      <Header title="Регистрация" auth={auth} />
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
            Создайте аккаунт
          </h2>
          <Form.Group as={Row} className="mb-3" controlId="formRegistLogin">
            <Form.Label
              column
              sm="3"
              style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
            >
              Логин
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                name="login"
                value={login}
                onChange={handleChangeLogin}
                required
                style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formRegistEmail">
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
                value={email}
                onChange={handleChangeEmail}
                required
                style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formRegistPassw">
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
                value={passw}
                onChange={handleChangePassw}
                required
                style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
              />
            </Col>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              type="submit"
              className="mt-3"
              style={{
                backgroundColor: "#8b7355",
                borderColor: "#8b7355",
                borderRadius: "5px",
                fontFamily: "Georgia, serif",
              }}
            >
              Зарегистрироваться
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Regist;