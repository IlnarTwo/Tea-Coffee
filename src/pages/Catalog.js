import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoxItem from "../components/BoxItem"
import { Button } from "react-bootstrap"

class Catalog extends React.Component{
  render(){
    return(
      <div>
        <Header title="Каталог" />
        <div className="container">
          <div>
            здесь надто может фильтр разместить или 
            <Button>Cl-cl-cl</Button>
          </div>
          <BoxItem />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Catalog