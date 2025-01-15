import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

class Cart extends React.Component{
  render(){
    return(
      <div>
        <Header title="Корзина" />
        <div className="container">
          ...
        </div>
        <Footer />
      </div>
    )
  }
}

export default Cart