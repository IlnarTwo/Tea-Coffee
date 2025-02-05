import React from "react";
import { Link } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";
import LogoutButton from "./LogoutButton";

class Header extends React.Component {
  outputPage() {
    const { auth, role } = this.props;

    if (auth) {
      return (
        <Nav className="ms-auto">
          <LogoutButton />
          <Link as={Link} to="/catalog" className="linkHeader">
            Каталог
          </Link>
          <Link as={Link} to="/cart" className="linkHeader">
            Корзина
          </Link>
          <Link as={Link} to="/payment" className="linkHeader">
            Оплата
          </Link>
          <Link as={Link} to="/profil" className="linkHeader">
            Профиль
          </Link>
          {role === "admin" && (
            <Link as={Link} to="/admin" className="linkHeader">
              Админ
            </Link>
          )}
        </Nav>
      );
    } else {
      return (
        <Nav className="ms-auto">
          
          <Link as={Link} to="/" className="linkHeader">
            Вход
          </Link>
          <Link as={Link} to="/regist" className="linkHeader">
            Регистрация
          </Link>
          <Link as={Link} to="/catalog" className="linkHeader">
            Каталог
          </Link>

          {/* <Link as={Link} to="/cart" className="linkHeader">
            Корзина
          </Link>
          <Link as={Link} to="/payment" className="linkHeader">
            Оплата
          </Link>
          <Link as={Link} to="/profil" className="linkHeader">
            Профиль
          </Link>
          <Link as={Link} to="/admin" className="linkHeader">
            Админ
          </Link> */}
          
        </Nav>
      );
    }
  }

  render() {
    return (
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#4a2c2a",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              color: "#f8f5f2",
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
            }}
          >
            ☕ Чайная Лавка
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {this.outputPage()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;