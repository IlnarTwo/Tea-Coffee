import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemBuy from "../components/ItemBuy"
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [], // Корзина с товарами
    };
  }

  componentDidMount() {
    // Загружаем корзину из localStorage (или из состояния приложения)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.setState({ cart });
  }

  // Удаление товара из корзины
  removeFromCart = (itemId) => {
    const updatedCart = this.state.cart.filter((item) => item.id !== itemId);
    this.setState({ cart: updatedCart }, () => {
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Обновляем localStorage
    });
  };

  // Подсчет общей суммы
  calculateTotal = () => {
    return this.state.cart.reduce((total, item) => total + item.price, 0);
  };

  render() {
    const { cart } = this.state;

    return (
      <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
        <Header title="Корзина" auth={this.props.auth} />
        <Container className="py-5">
          <h2
            style={{
              color: "#4a2c2a",
              fontFamily: "Georgia, serif",
              marginBottom: "2rem",
            }}
          >
            Ваша корзина
          </h2>
          {cart.length === 0 ? (
            <Alert
              variant="info"
              style={{ fontFamily: "Georgia, serif", textAlign: "center" }}
            >
              Ваша корзина пуста.
            </Alert>
          ) : (
            <Row>
              <Col md={8}>
                <div className="listItem">
                  {cart.map((item) => (
                      <ItemBuy
                        key={item.id}
                        id={item.id} 
                        title={item.title}
                        price={item.price}
                        removeCart={() => this.removeFromCart(item.id)} // Передаем функцию удаления
                     />
                  ))}
                </div>
              </Col>
              <Col md={4}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    padding: "1.5rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h4
                    style={{
                      color: "#4a2c2a",
                      fontFamily: "Georgia, serif",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Итого
                  </h4>
                  <p
                    style={{
                      color: "#8b7355",
                      fontFamily: "Georgia, serif",
                      fontSize: "1.25rem",
                    }}
                  >
                    Общая сумма: {this.calculateTotal()}₽
                  </p>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#8b7355",
                      borderColor: "#8b7355",
                      borderRadius: "5px",
                      fontFamily: "Georgia, serif",
                      width: "100%",
                    }}
                  >
                    Оформить заказ
                  </Button>
                </div>
              </Col>
            </Row>
          )}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Cart;