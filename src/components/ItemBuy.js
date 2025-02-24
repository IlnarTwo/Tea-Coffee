import React from "react";
import { Card, Button } from "react-bootstrap";
import item from "../img/defaultimg.webp";

class ItemBuy extends React.Component {
  render() {
    const { title, price, quantity, removeCart, increaseQuantity, decreaseQuantity } = this.props;
    const totalPrice = price * quantity; // Общая стоимость товара с учетом количества

    return (
      <Card
        style={{
          width: "20rem",
          borderRadius: "10px",
          borderColor: "#d3c1b2",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s",
        }}
        className="my-4 hover-shadow"
      >
        <Card.Img
          variant="top"
          src={item}
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              color: "#4a2c2a",
              fontFamily: "Georgia, serif",
              fontSize: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            {title}
          </Card.Title>
          <Card.Text
            style={{
              color: "#8b7355",
              fontFamily: "Georgia, serif",
              fontSize: "0.9rem",
            }}
          >
            Описание товара. Краткое описание, которое подчеркивает особенности продукта.
          </Card.Text>

          {/* Блок с количеством товара */}
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ marginTop: "1rem" }}
          >
            <div
              style={{
                color: "#4a2c2a",
                fontFamily: "Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              Количество:
            </div>
            <div className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                onClick={decreaseQuantity}
                style={{
                  marginRight: "0.5rem",
                  borderRadius: "5px",
                  fontFamily: "Georgia, serif",
                }}
              >
                -
              </Button>
              <span
                style={{
                  color: "#4a2c2a",
                  fontFamily: "Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                {quantity}
              </span>
              <Button
                variant="outline-secondary"
                onClick={increaseQuantity}
                style={{
                  marginLeft: "0.5rem",
                  borderRadius: "5px",
                  fontFamily: "Georgia, serif",
                }}
              >
                +
              </Button>
            </div>
          </div>

          {/* Блок с ценой за единицу и общей стоимостью */}
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ marginTop: "1rem" }}
          >
            <div
              style={{
                color: "#4a2c2a",
                fontFamily: "Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              Цена за единицу:
            </div>
            <div
              style={{
                color: "#4a2c2a",
                fontFamily: "Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              {price} ₽
            </div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ marginTop: "1rem" }}
          >
            <div
              style={{
                color: "#4a2c2a",
                fontFamily: "Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              Общая стоимость:
            </div>
            <div
              style={{
                color: "#4a2c2a",
                fontFamily: "Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              {totalPrice} ₽
            </div>
          </div>

          {/* Кнопка удаления товара */}
          <Button
            variant="danger"
            onClick={removeCart}
            style={{
              backgroundColor: "#a0522d",
              borderColor: "#a0522d",
              borderRadius: "5px",
              fontFamily: "Georgia, serif",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            Удалить
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ItemBuy;