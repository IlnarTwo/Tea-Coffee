import React from "react";
import { Card } from "react-bootstrap";

const ProfilBlock = ({ login, email, role }) => {
  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "none",
      }}
      className="my-4"
    >
      <Card.Body>
        <h3
          style={{
            color: "#4a2c2a",
            fontFamily: "Georgia, serif",
            marginBottom: "1.5rem",
          }}
        >
          Профиль
        </h3>
        <Card.Title
          style={{
            color: "#4a2c2a",
            fontFamily: "Georgia, serif",
            fontSize: "1.5rem",
          }}
        >
          {login}
        </Card.Title>
        <Card.Text
          style={{
            color: "#8b7355",
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
          }}
        >
          <strong>Email:</strong> {email}
          <br />
          <strong>Роль:</strong> {role}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfilBlock;