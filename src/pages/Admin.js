import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

class Admin extends React.Component{
  render(){
    return(
      <div>
        <Header title="Каталог" />
        <div className="container">
          Admin panel
        </div>
        <Footer />
      </div>
    )
  }
}

export default Admin