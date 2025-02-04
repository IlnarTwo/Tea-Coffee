import React from "react";
import { Button, Card } from "react-bootstrap";
import item from "../img/defaultimg.webp";

class Item extends React.Component {
  render() {
    return (
      <Card 
        style={{ 
          width: '18rem', 
          borderRadius: '10px', 
          borderColor: '#d3c1b2',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s',
        }} 
        className="my-4 hover-shadow"
      >
        <Card.Img 
          variant="top" 
          src={item} 
          style={{ 
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            height: '200px',
            objectFit: 'cover'
          }} 
        />
        <Card.Body>
          <Card.Title 
            style={{ 
              color: '#4a2c2a', 
              fontFamily: 'Georgia, serif',
              fontSize: '1.25rem',
              marginBottom: '1rem'
            }}
          >
            {this.props.title}
          </Card.Title>
          <Card.Text 
            style={{ 
              color: '#8b7355', 
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem'
            }}
          >
            Описание товара. Краткое описание, которое подчеркивает особенности продукта.
          </Card.Text>
          <div 
            className="d-flex justify-content-between align-items-center"
            style={{ marginTop: '1rem' }}
          >
            <Button 
              onClick={this.props.onAddToCart}
              style={{ 
                backgroundColor: '#8b7355', 
                borderColor: '#8b7355',
                borderRadius: '5px',
                fontFamily: 'Georgia, serif',
                padding: '0.5rem 1rem'
              }}
            >
              Купить
            </Button>
            <div 
              style={{ 
                color: '#4a2c2a', 
                fontFamily: 'Georgia, serif',
                fontSize: '1.25rem',
                fontWeight: 'bold'
              }}
            >
              {this.props.price} ₽
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Item;