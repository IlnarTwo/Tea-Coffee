import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemBuy from "../components/ItemBuy"
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";

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
    // Приводим itemId к числу, если это необходимо
    itemId = Number(itemId); // Убедимся, что itemId — это число
    const updatedCart = this.state.cart.filter((item) => Number(item.id) !== itemId); // Приводим item.id к числу
    this.setState({ cart: updatedCart }, () => {
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Обновляем localStorage
    });
  };

  // Подсчет общей суммы
  calculateTotal = () => {
    return this.state.cart.reduce((total, item) => total + item.price, 0);
  };

  addListItem = () => {
    let listItemDB = []
    let cart = this.state.cart
    let totalPrice = this.calculateTotal()

    for (let i = 0; i < cart.length; i++){
      listItemDB.push(cart[i]['id'])
    }

    console.log(listItemDB)
    
    if (localStorage['jwt']){
      axios.post("http://127.0.0.1/server/php/addCartItem.php", {
        listItem: listItemDB,
        price: totalPrice
      })
      .then((res) => {
        alert(res.data.output)
        console.log("Заказ оформлен")
      })
      .catch((e) => {
        console.log("Ошибка при оформлении заказа")
        console.log(e)
      })
    }else{
      console.log("Для оформления заказа войдите в профиль или зарегистрируйтесь")
    }
  }

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
                    onClick={this.addListItem} // Исправлено: убраны скобки
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