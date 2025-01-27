import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoxItem from "../components/BoxItem"
import { Button } from "react-bootstrap"

class Catalog extends React.Component{
  render(){
    return(
      <div>
        <Header title="Каталог" auth={this.props.auth}/>
        <div className="container">
          <div>
            здесь надто может фильтр разместить или 
            <Button>Cl-cl-cl</Button>
          </div>
          <BoxItem items={5}/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Catalog