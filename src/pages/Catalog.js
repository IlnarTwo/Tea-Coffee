import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Row, Col, Button } from "react-bootstrap";
import Item from "../components/Item";
import axios from "axios";

const Catalog = ({ auth }) => {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });
  const [items, setItems] = useState([]); // Состояние для хранения товаров с сервера
  const [filteredItems, setFilteredItems] = useState([]); // Состояние для отфильтрованных товаров
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []); // Корзина

  // Загрузка данных с сервера при монтировании компонента
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://127.0.0.1/server/php/itemOutput.php"); // Укажите правильный URL
        setItems(response.data); // Предполагаем, что сервер возвращает массив товаров
        setFilteredItems(response.data); // Инициализируем отфильтрованные товары
        console.log(response.data)
      } catch (error) {
        console.error("Ошибка при загрузке каталога:", error);
      }
    };

    fetchItems();
  }, []);

  // Обработчик изменения фильтров
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Применение фильтров
  const applyFilters = () => {
    const { category, minPrice, maxPrice } = filters;
    const filtered = items.filter((item) => {
      if (category && item.category !== category) return false;
      if (minPrice && item.price < parseFloat(minPrice)) return false;
      if (maxPrice && item.price > parseFloat(maxPrice)) return false;
      return true;
    });
    setFilteredItems(filtered);
  };

  // Сброс фильтров
  const resetFilters = () => {
    setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
    });
    setFilteredItems(items); // Показываем все товары
  };

  // Добавление товара в корзину
  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.iditem === item.iditem);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
      <Header title="Каталог" auth={auth} />
      <div className="container py-5">
        <Row>
          {/* Блок фильтров */}
          <Col md={3}>
            <div
              className="p-4"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  color: "#4a2c2a",
                  fontFamily: "Georgia, serif",
                  marginBottom: "1.5rem",
                }}
              >
                Фильтры
              </h3>
              <Form>
                {/* Фильтр по категории */}
                <Form.Group className="mb-3">
                  <Form.Label>Категория</Form.Label>
                  <Form.Select
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                    style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                  >
                    <option value="">Все</option>
                    <option value="tea">Чай</option>
                    <option value="coffee">Кофе</option>
                  </Form.Select>
                </Form.Group>

                {/* Фильтр по цене */}
                <Form.Group className="mb-3">
                  <Form.Label>Цена</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="От"
                        name="minPrice"
                        value={filters.minPrice}
                        min={0}
                        onChange={handleFilterChange}
                        style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="До"
                        name="maxPrice"
                        value={filters.maxPrice}
                        min={0}
                        onChange={handleFilterChange}
                        style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                      />
                    </Col>
                  </Row>
                </Form.Group>

                {/* Кнопки */}
                <Button
                  variant="primary"
                  onClick={applyFilters}
                  style={{
                    backgroundColor: "#8b7355",
                    borderColor: "#8b7355",
                    borderRadius: "5px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Применить
                </Button>
                <Button
                  variant="secondary"
                  onClick={resetFilters}
                  style={{
                    backgroundColor: "#d3c1b2",
                    borderColor: "#d3c1b2",
                    borderRadius: "5px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Сбросить
                </Button>
              </Form>
            </div>
          </Col>

          {/* Блок товаров */}
          <Col md={9}>
            <Row>
              {filteredItems.map((item) => (
                <Col key={item.iditem} md={4} className="mb-4">
                  <Item
                    title={item.title}
                    price={item.price}
                    discrip={item.discrip}
                    onAddToCart={() => addToCart(item)} // Передаем функцию добавления в корзину
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;