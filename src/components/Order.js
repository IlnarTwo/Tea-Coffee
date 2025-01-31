import React from "react"
import { Button, Card } from "react-bootstrap"

class Order extends React.Component{
    render(){
    return(
      <Card style={{width: '18rem'}} className="my-4">
        {/* <Card.Img variant="top" src={item}/> */}
        <Card.Body>
          <Card.Title>Title my item</Card.Title>
          <Card.Text>
            Text my Item eeeeeeeeeeeeeee
          </Card.Text>
          <Button variant="success" className="col-md-6">Отменить</Button> 
        </Card.Body>
      </Card>
    )
  }
}

export default Order