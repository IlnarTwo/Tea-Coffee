import React from "react"
import { Button } from "react-bootstrap"

class Item extends React.Component{
    
    render(){
    return(
      <div className="blockItem">
        <div className="imgItem">пока пусто</div>
        <div className="infoItem">
            <h3>пока h3</h3>
            <p>пока p</p>
            <Button>Клац-Клац</Button>
        </div>
      </div>
    )
  }
}

export default Item