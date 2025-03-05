import React from "react";
import { Card } from "react-bootstrap";

const UserBlock = ({ login, email, role }) => {
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
    >
      <Card.Body>
        <Card.Title
          style={{
            color: "#4a2c2a",
            fontFamily: "Georgia, serif",
            fontSize: "1.25rem",
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

export default UserBlock;