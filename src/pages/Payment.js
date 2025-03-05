import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Col, Form, Row, Container } from "react-bootstrap";

const Payment = ({ auth }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Оплата прошла успешно!"); // Заглушка для обработки оплаты
  };

  return (
    <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
      <Header title="Оплата" auth={auth} />
      <Container className="py-5">
        <h2
          className="text-center mb-4"
          style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
        >
          Оплата заказа
        </h2>
        <Form
          onSubmit={handleSubmit}
          className="col-md-8 mx-auto p-4"
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form.Group as={Row} className="mb-3" controlId="formCardNumber">
            <Form.Label
              column
              sm="3"
              style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
            >
              Номер карты
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="0000 0000 0000 0000"
                required
                style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formCardExpiry">
            <Form.Label
              column
              sm="3"
              style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
            >
              Срок действия
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="MM/YY"
                required
                style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formCardCVC">
            <Form.Label
              column
              sm="3"
              style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
            >
              CVC/CVV
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="123"
                required
                style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formCardHolder">
            <Form.Label
              column
              sm="3"
              style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
            >
              Имя владельца
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="NAME"
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
              Оплатить
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Payment;