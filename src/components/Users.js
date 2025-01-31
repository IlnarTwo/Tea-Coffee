import React from "react"
import UserBlock from "./UserBlock";
import axios from "axios";

class Users extends React.Component{
    /*
    forItem(props) {
        for (let i = 0; i<props.q; i++){
            return <Item />
        }
    }
    */

    outputItems() {
        axios.post( "http://127.0.0.1/server/php/users.php")
        .then((response) => {
            
          console.log(response.map(({key, value}) => ({[key]: value})))
          return(
            <UserBlock />
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
                <UserBlock />
            </div>
        ) 
    }
}

export default Users