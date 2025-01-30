import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Item from "../components/Item"
import { Button } from "react-bootstrap"
import axios from "axios"

class Profil extends React.Component{

    outputUser() {
        axios.post( "http://127.0.0.1/server/php/profil.php")
        .then((response) => {
          console.log(response['login'])  
          return(
            <Item />
          )  
        })
        .catch((error) => {
          console.log(error)
        })
    }

  render(){
    return(
      <div>
        <Header title="Профиль" auth={this.props.auth}/>
        <div className="container">
          <div className="cartBox">
          {this.outputUser()}
          sfhaui
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

export default Profil