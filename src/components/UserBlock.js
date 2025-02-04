import React from "react"
import { Button, Card } from "react-bootstrap"
import img from "../img/logo.png"

class UserBlock extends React.Component{
    render(){
    return(
      <Card style={{ 
        width: '18rem', 
        borderRadius: '10px', 
        borderColor: '#d3c1b2',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      }} 
      className="my-4 hover-shadow">
        <Card.Img variant="top" src={img} 
          style={{ 
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            height: '200px',
            objectFit: 'cover'
          }} />
        <Card.Body>
          <Card.Title
            style={{ 
              color: '#4a2c2a', 
              fontFamily: 'Georgia, serif',
              fontSize: '1.25rem',
              marginBottom: '1rem'
            }}
          >User</Card.Title>
          <Card.Text
            style={{ 
              color: '#8b7355', 
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem'
            }}
          >
            User text
          </Card.Text>
          <div className="rowBlock">
            <Button 
              variant="success" 
              className="col-md-5"
              style={{ backgroundColor: '#8b7355', borderColor: '#8b7355', borderRadius: '5px', fontFamily: 'Georgia, serif' }}
            >
              Add manager
            </Button> 
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default UserBlock