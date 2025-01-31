import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Item from "../components/Item"
import axios from "axios"
import ProfilBlock from "../components/ProfilBlock"
import BoxOrder from "../components/BoxOrder"

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
          <div className="contentProfil">
          {this.outputUser()}
            <div className="ordersBlock">
              <BoxOrder />
            </div>
            <div className="profilBlock">
              <ProfilBlock login="ila" email="ila@ila" role="user"/>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Profil