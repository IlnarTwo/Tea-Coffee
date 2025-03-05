import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemBuy from "../components/ItemBuy";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router"; // Используем useNavigate из react-router-dom

const Cart = ({ auth }) => {
  const [cart, setCart] = useState([]); // Состояние корзины
  const navigate = useNavigate(); // Хук для навигации

  // Загрузка корзины из localStorage при монтировании компонента
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Удаление товара из корзины
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.iditem !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Обновляем localStorage
  };

  // Увеличение количества товара
  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.iditem === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Обновляем localStorage
  };

  // Уменьшение количества товара
  const decreaseQuantity = (itemId) => {
    const updatedCart = cart
      .map((item) =>
        item.iditem === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Удаляем товар, если количество стало 0
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Обновляем localStorage
  };

  // Подсчет общей суммы с учетом количества товаров
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Оформление заказа
  const addListItem = () => {
    const totalPrice = calculateTotal();

    if (localStorage.getItem("jwt")) {
      const listItemDB = cart.map((item) => ({
        id: item.iditem,
        quantity: item.quantity,
      }));

      axios
        .post("http://127.0.0.1/server/php/addCartItem.php", {
          listItem: listItemDB,
          price: totalPrice,
        })
        .then((res) => {
          // alert(res.data.output);
          console.log("Заказ оформлен");
          setCart([]); // Очищаем корзину
          localStorage.removeItem("cart"); // Удаляем корзину из localStorage
          navigate("/payment"); // Перенаправляем на страницу оплаты
        })
        .catch((e) => {
          console.log("Ошибка при оформлении заказа");
          console.log(e);
        });
    } else {
      navigate("/"); // Перенаправляем на главную страницу, если пользователь не авторизован
      console.log("Для оформления заказа войдите в профиль или зарегистрируйтесь");
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
      <Header title="Корзина" auth={auth} />
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
                    key={item.iditem}
                    id={item.iditem}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    removeCart={() => removeFromCart(item.iditem)}
                    increaseQuantity={() => increaseQuantity(item.iditem)}
                    decreaseQuantity={() => decreaseQuantity(item.iditem)}
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
                  Общая сумма: {calculateTotal()}₽
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
                  onClick={addListItem}
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
};

export default Cart;