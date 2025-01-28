import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoxItem from "../components/BoxItem"
import FormCatalog from "../components/Form"

class Catalog extends React.Component{
  render(){
    return(
      <div>
        <Header title="Каталог" auth={this.props.auth}/>
        <div className="container">
          <div className="filterBlock">
            <FormCatalog />
          </div>
          <BoxItem items={5}/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Catalog