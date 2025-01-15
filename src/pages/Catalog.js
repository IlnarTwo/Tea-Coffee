import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoxItem from "../components/BoxItem"

class Catalog extends React.Component{
  render(){
    return(
      <div>
        <Header title="Каталог" />
        <div className="container">
          <div className="catalogBox">
            <BoxItem />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Catalog