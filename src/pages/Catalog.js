import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Row, Col, Button } from "react-bootstrap";
import Item from "../components/Item";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        category: "",
        minPrice: "", 
        maxPrice: "", 
      },
      items: [
        { id: 1, title: "Чай зеленый", price: 300, category: "tea" },
        { id: 2, title: "Кофе арабика", price: 500, category: "coffee" },
        { id: 3, title: "Чай черный", price: 250, category: "tea" },
        { id: 4, title: "Кофе робуста", price: 400, category: "coffee" },
        { id: 5, title: "Чай улун", price: 600, category: "tea" },
      ],
      filteredItems: [], 
      cart: [],
    };
  }

  componentDidMount() {
    this.setState({ filteredItems: this.state.items });
  }

  handleFilterChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      (prevState) => ({
        filters: {
          ...prevState.filters,
          [name]: value,
        },
      }),
      this.applyFilters
    );
  };

  applyFilters = () => {
    const { category, minPrice, maxPrice } = this.state.filters;
    const { items } = this.state;

    const filteredItems = items.filter((item) => {
      if (category && item.category !== category) return false;

      if (minPrice && item.price < parseFloat(minPrice)) return false;
      if (maxPrice && item.price > parseFloat(maxPrice)) return false;

      return true;
    });

    this.setState({ filteredItems });
  };

  resetFilters = () => {
    this.setState(
      {
        filters: {
          category: "",
          minPrice: "",
          maxPrice: "",
        },
      },
      this.applyFilters 
    );
  };

  addToCart = (item) => {
    const updatedCart = [...this.state.cart, item];
    this.setState(
      {
        cart: updatedCart
      },
      () => {
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
      }
    );
  };

  render() {
    const { filteredItems, filters } = this.state;

    return (
      <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
        <Header title="Каталог" auth={this.props.auth} />
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
                      onChange={this.handleFilterChange}
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
                          onChange={this.handleFilterChange}
                          style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="До"
                          name="maxPrice"
                          value={filters.maxPrice}
                          onChange={this.handleFilterChange}
                          style={{ borderRadius: "5px", borderColor: "#d3c1b2" }}
                        />
                      </Col>
                    </Row>
                  </Form.Group>

                  {/* Кнопки */}
                  <Button
                    variant="primary"
                    onClick={this.applyFilters}
                    style={{
                      backgroundColor: "#8b7355",
                      borderColor: "#8b7355",
                      borderRadius: "5px",
                      fontFamily: "Georgia, serif",
                      marginRight: "10px",
                    }}
                  >
                    Применить
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={this.resetFilters}
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
                  <Col key={item.id} md={4} className="mb-4">
                    <Item
                      title={item.title}
                      price={item.price}
                      onAddToCart={() => this.addToCart(item)} // Передаем функцию добавления в корзину
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
  }
}

export default Catalog;