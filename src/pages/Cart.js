import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ItemBuy from "../components/ItemBuy"
import { Button } from "react-bootstrap"

class Cart extends React.Component{
  render(){
    return(
      <div>
        <Header title="Корзина" auth={this.props.auth}/>
        <div className="container">
          <div className="cartBox">
            <ItemBuy quantity="999" price="999"/>
            <ItemBuy quantity="999" price="999"/>
            <ItemBuy quantity="999" price="999"/>
          </div>
          <div>
            <Button
              style={{ backgroundColor: '#8b7355', borderColor: '#8b7355', borderRadius: '5px', fontFamily: 'Georgia, serif' }}
            >
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