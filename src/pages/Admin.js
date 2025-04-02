import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Users from "../components/Users";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import axios from "axios";

const Admin = ({ auth }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    discript: "",
    price: "",
    img: null, // Для хранения файла изображения
  });

  const categories = [
    { value: "tea", label: "Чай" },
    { value: "coffee", label: "Кофе" },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setFormData({ ...formData, [name]: files[0] }); // Сохраняем файл изображения
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("discript", formData.discript);
    data.append("price", formData.price);
    if (formData.img) {
      data.append("img", formData.img); // Добавляем изображение, если оно есть
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1/server/php/addItem.php",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Указываем тип контента для загрузки файлов
          },
        }
      );
      console.log(response.data);
      alert("Товар успешно добавлен!");
      setFormData({ title: "", category: "", discript: "", price: "", img: null }); // Очищаем форму
    } catch (error) {
      console.error("Ошибка при добавлении товара:", error);
      alert("Произошла ошибка при добавлении товара.");
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
      <Header title="Admin panel" auth={auth} />
      <Container className="py-5">
        <h2
          className="text-center mb-4"
          style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}
        >
          Панель администратора
        </h2>
        <Row>
          <Col md={6}>
            <Users />
          </Col>
          <Col md={6}>
            <Form
              onSubmit={handleSubmit}
              className="p-4"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}>
                  Изображение
                </Form.Label>
                <Form.Control
                  type="file"
                  name="img"
                  onChange={handleChange}
                  style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}>
                  Название
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}>
                  Категория
                </Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                >
                  <option value="">Выберите категорию</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}>
                  Описание
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="discript"
                  value={formData.discript}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#4a2c2a", fontFamily: "Georgia, serif" }}>
                  Цена
                </Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#8b7355",
                  borderColor: "#8b7355",
                  borderRadius: "5px",
                  fontFamily: "Georgia, serif",
                  width: "100%",
                }}
              >
                Добавить товар
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Admin;