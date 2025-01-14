import React from "react"
import Item from "./Item"

class BoxItem extends React.Component{
    
    render(){
    return(
      <div className="catalogBox">
        <Item />
      </div>
    )
  }
}

export default BoxItem