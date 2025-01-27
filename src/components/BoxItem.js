import React from "react"
import Item from "./Item"

class BoxItem extends React.Component{
    /*
    forItem(props) {
        for (let i = 0; i<props.q; i++){
            return <Item />
        }
    }
    */
    
    render(){
        return(
            <div className="catalogBox">
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