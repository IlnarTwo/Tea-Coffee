import React from "react"
import { Button, Card } from "react-bootstrap"

class Order extends React.Component{
    render(){
    return(
      <Card style={{width: '18rem'}} className="my-4">
        {/* <Card.Img variant="top" src={item}/> */}
        <Card.Body>
          <Card.Title>My Order</Card.Title>
          <Card.Text>
            Order text?????
            <br />
            {this.props.price}$
            <br />
            {this.props.date}
          </Card.Text>
          <Button 
            variant="success" 
            className="col-md-6"
            style={{ backgroundColor: '#8b7355', borderColor: '#8b7355', borderRadius: '5px', fontFamily: 'Georgia, serif' }}
          >Отменить</Button> 
        </Card.Body>
      </Card>
    )
  }
}

export default Order