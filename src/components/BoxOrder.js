import React from "react"
import Order from "./Order"
import axios from "axios";

class BoxOrder extends React.Component{

    outputOrders() {
        axios.post( "http://127.0.0.1/server/php/itemOutput.php")
        .then((response) => {
            
          console.log(response.map(({key, value}) => ({[key]: value})))
          return(
            <Order />
          )  
        })
        .catch((error) => {
          console.log(error)
        })
    }

    render(){
        return(
            <div className="catalogBox">
                {this.outputOrders()}
                <Order price="9999" date="31.01.25"/>
                <Order price="9999" date="31.01.25"/>
                <Order price="9999" date="31.01.25"/>
                <Order price="9999" date="31.01.25"/>
                <Order price="9999" date="31.01.25"/>
                <Order price="9999" date="31.01.25"/>
                <Order price="9999" date="31.01.25"/>
            </div>
        ) 
    }
}

export default BoxOrder