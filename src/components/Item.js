import React from "react"
import { Button } from "react-bootstrap"
import logo from "../img/logo.png"

class Item extends React.Component{
    render(){
    return(
      <div className="card">
        <img src={logo} alt="карта товара" className="card-img-top imgItem" />
        <div className="card-body">
            <h5 className="card-body">пока h5</h5>
            <p className="card-text">пока p</p>
            <Button>Клац-Клац</Button>
        </div>
      </div>
    )
  }
}

export default Item