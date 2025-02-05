import React from "react"
import { Card, Button } from "react-bootstrap"
import item from "../img/defaultimg.webp"

class ItemBuy extends React.Component{
    render(){
    return(
      
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
            <div 
              style={{ 
                color: '#4a2c2a', 
                fontFamily: 'Georgia, serif',
                fontSize: '1.25rem',
                fontWeight: 'bold'
              }}
            >
              Количество:
            </div>
            <div 
              style={{ 
                color: '#4a2c2a', 
                fontFamily: 'Georgia, serif',
                fontSize: '1.25rem',
                fontWeight: 'bold'
              }}
            >
              {this.props.price}
            </div>
          </div>
          <div 
            className="d-flex justify-content-between align-items-center"
            style={{ marginTop: '1rem' }}
          >
            <div 
              style={{ 
                color: '#4a2c2a', 
                fontFamily: 'Georgia, serif',
                fontSize: '1.25rem',
                fontWeight: 'bold'
              }}
            >
              Цена:
            </div>
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

          <Button
            variant="danger"
            onClick={this.props.removeCart} // Вызываем функцию удаления
            style={{
              backgroundColor: "#a0522d",
              borderColor: "#a0522d",
              borderRadius: "5px",
              fontFamily: "Georgia, serif",
            }}
          >
            Удалить
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default ItemBuy