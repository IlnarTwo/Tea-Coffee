import React from "react"
import { Button, Card } from "react-bootstrap"
import logo from "../img/logo.png"

class Item extends React.Component{
    render(){
    return(
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={logo}/>
        <Card.Body>
          <Card.Title>Title my item</Card.Title>
          <Card.Text>
            Text my Item eeeeeeeeeeeeeee
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Item