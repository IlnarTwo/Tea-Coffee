import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfilBlock from "../components/ProfilBlock";
import BoxOrder from "../components/BoxOrder";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const Profil = () => {
  const [userData, setUserData] = useState(null); // Данные пользователя
  const [orders, setOrders] = useState([]); // Список заказов
  const [loading, setLoading] = useState(true); // Состояние загрузки

  // Загрузка данных пользователя и его заказов
  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage['auth'] || ''; // Получаем email из localStorage

        console.log(email)

        // Загрузка данных пользователя
        const userResponse = await axios.post(
          "http://127.0.0.1/server/php/profil.php",
          {
            email: email,
          }
        );
        if (userResponse.status !== 200) {
          throw new Error("Ошибка при загрузке данных пользователя");
        }
        setUserData(userResponse.data);

        // Загрузка заказов пользователя
        const ordersResponse = await axios.post(
          "http://127.0.0.1/server/php/orders.php",
          {
            email: email,
          }
        );
        if (ordersResponse.status !== 200) {
          throw new Error("Ошибка при загрузке заказов");
        }
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>; // Отображение загрузки
  }

  return (
    <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
      <Header title="Профиль" />
      <Container className="py-5">
        <h2
          className="text-center mb-4"
          style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
        >
          Профиль
        </h2>
        <Row>
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
                Информация о пользователе
              </h4>
              {userData && userData.login && userData.email && userData.roleUser && (
                <ProfilBlock
                  login={userData.login}
                  email={userData.email}
                  role={userData.roleUser}
                />
              )}
            </div>
          </Col>
          <Col md={8}>
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
                Ваши заказы
              </h4>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <BoxOrder
                    key={index}
                    id={order.idorder}
                    date={order.dateOrder}
                    total={order.price}
                    status={order.status}
                  />
                ))
              ) : (
                <p style={{ color: "#8b7355", fontFamily: "Georgia, serif" }}>
                  У вас пока нет заказов.
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Profil;