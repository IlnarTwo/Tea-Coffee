import React from "react"
import Item from "./Item"

class BoxItem extends React.Component{  
    render(){
        for (let i=0; i<8; i++){
            return(
                <Item />
            )
        } 
    }
}

export default BoxItem