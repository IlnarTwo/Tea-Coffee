import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ItemBuy from "../components/ItemBuy"
import { Button } from "react-bootstrap"

class Cart extends React.Component{
  render(){
    return(
      <div>
        <Header title="Корзина" />
        <div className="container">
          <div className="cartBox">
            <ItemBuy quantity="999" price="999"/>
            <ItemBuy quantity="999" price="999"/>
            <ItemBuy quantity="999" price="999"/>
          </div>
          <div>
            <Button>
              Оплатить
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Cart