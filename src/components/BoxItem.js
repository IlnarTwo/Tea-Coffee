import React from "react"
import Item from "./Item"
import axios from "axios";

class BoxItem extends React.Component{
    /*
    forItem(props) {
        for (let i = 0; i<props.q; i++){
            return <Item />
        }
    }
    */

    outputItems() {
        axios.post( "http://127.0.0.1/server/php/itemOutput.php")
        .then((response) => {
          console.log(response)
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
            <div className="catalogBox">
                {this.outputItems()}
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        ) 
    }
}

export default BoxItem