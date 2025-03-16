import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Отправляем запрос на бэкенд для завершения сессии
      const response = await axios.post("http://127.0.0.1/server/php/exit.php");

      if (response.data.success) {
        // Удаляем JWT из localStorage
        localStorage.removeItem("jwt");
        localStorage.removeItem("auth");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        localStorage.clear()

        // Убираем заголовок Authorization для всех последующих запросов
        delete axios.defaults.headers.common["Authorization"];

        // Перенаправляем пользователя на страницу входа
        navigate("/");

        // Можно также обновить состояние приложения (например, сбросить auth и role)
        // Это зависит от того, как у вас организовано управление состоянием.
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Link to="/"
      onClick={handleLogout} 
      className="linkHeader"
    >
      Выход
    </Link>
  );
};

export default LogoutButton;