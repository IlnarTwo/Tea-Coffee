import React from "react"
import { Card } from "react-bootstrap"
import item from "../img/item1.webp"

class ItemBuy extends React.Component{
    render(){
    return(
      <Card style={{width: '18rem'}} className="my-4">
        <Card.Img variant="top" src={item}/>
        <Card.Body>
          <Card.Title>Title my item</Card.Title>
          <Card.Text>
            Text my Item eeeeeeeeeeeeeee
          </Card.Text>
          <div className=""> 
            <div className="">
              Количество: {this.props.quantity}
            </div>
            <div className="">
              Цена: {this.props.price}
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default ItemBuy