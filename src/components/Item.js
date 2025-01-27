import React from "react"
import { Button, Card } from "react-bootstrap"
import item from "../img/item1.webp"

class Item extends React.Component{
    render(){
    return(
      <Card style={{width: '18rem'}} className="my-4">
        <Card.Img variant="top" src={item}/>
        <Card.Body>
          <Card.Title>Title my item</Card.Title>
          <Card.Text>
            Text my Item eeeeeeeeeeeeeee
          </Card.Text>
          <div className="rowBlock">
            <Button variant="success" className="col-md-4">Buy</Button> 
            <div className="">
              9999$
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default Item