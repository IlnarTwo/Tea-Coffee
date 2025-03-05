import React from "react";
import { Button, Card } from "react-bootstrap";

const Order = ({ price, date, status }) => {
  return (
    <Card
      style={{
        width: "100%",
        marginBottom: "1rem",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "none",
      }}
      className="my-4"
    >
      <Card.Body>
        <Card.Title
          style={{
            color: "#4a2c2a",
            fontFamily: "Georgia, serif",
            fontSize: "1.5rem",
          }}
        >
          Заказ
        </Card.Title>
        <Card.Text
          style={{
            color: "#8b7355",
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
          }}
        >
          <strong>Сумма:</strong> {price}₽
          <br />
          <strong>Дата:</strong> {date}
          <br />
          <strong>Статус:</strong> {status}
        </Card.Text>
        <Button
          variant="success"
          className="col-md-6"
          style={{
            backgroundColor: "#8b7355",
            borderColor: "#8b7355",
            borderRadius: "5px",
            fontFamily: "Georgia, serif",
          }}
        >
          Отменить
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Order;