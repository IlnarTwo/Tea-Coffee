import React, { useState, useEffect } from "react";
import Order from "./Order";
import axios from "axios";

const BoxOrder = () => {
  const [orders, setOrders] = useState([]); // Состояние для хранения заказов
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Состояние ошибки

  // Загрузка заказов с сервера
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post("http://127.0.0.1/server/php/orders.php");
        setOrders(response.data.orders); // Предполагаем, что сервер возвращает объект с массивом заказов
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке заказов:", error);
        setError("Не удалось загрузить заказы. Пожалуйста, попробуйте позже.");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Загрузка заказов...</div>; // Отображение состояния загрузки
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>; // Отображение ошибки
  }

  if (orders.length === 0) {
    return <div>У вас пока нет заказов.</div>; // Отображение, если заказов нет
  }

  return (
    <div className="catalogBox">
      {orders.map((order) => (
        <Order
          key={order.id} // Уникальный ключ для каждого заказа
          price={order.price}
          date={order.date}
          status={order.status} // Добавляем статус заказа, если он есть
        />
      ))}
    </div>
  );
};

export default BoxOrder;