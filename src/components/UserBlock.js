import React from "react"
import { Button, Card } from "react-bootstrap"
import img from "../img/logo.png"

class UserBlock extends React.Component{
    render(){
    return(
      <Card style={{width: '18rem'}} className="my-4">
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>User</Card.Title>
          <Card.Text>
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