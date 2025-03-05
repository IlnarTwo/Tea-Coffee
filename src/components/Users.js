import React, { useState, useEffect } from "react";
import UserBlock from "./UserBlock";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]); // Состояние для хранения пользователей
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Состояние ошибки

  // Загрузка пользователей с сервера
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post("http://127.0.0.1/server/php/users.php");
        
        // Проверяем, что ответ содержит массив пользователей
        if (Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          setError("Данные пользователей не найдены или имеют неверный формат.");
        }
      } catch (error) {
        console.error("Ошибка при загрузке пользователей:", error);
        setError("Не удалось загрузить пользователей. Пожалуйста, попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Загрузка пользователей...</div>; // Отображение состояния загрузки
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>; // Отображение ошибки
  }

  if (users.length === 0) {
    return <div>Пользователи не найдены.</div>; // Отображение, если пользователей нет
  }

  return (
    <div className="catalogBox">
      {users.map((user) => (
        <UserBlock
          key={user.iduser} // Уникальный ключ для каждого пользователя
          login={user.login}
          email={user.email}
          role={user.roleUser}
        />
      ))}
    </div>
  );
};

export default Users;