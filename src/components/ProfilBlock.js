import React from "react"
import { Card } from "react-bootstrap"

class ProfilBlock extends React.Component{
    render(){
    return(
      <Card style={{width: '18rem'}} className="my-4">
        {/* <Card.Img variant="top" src={img}/> */}
        <Card.Body>
            <h3>Profil</h3>
          <Card.Title>{this.props.login}</Card.Title>
          <Card.Text>
            {this.props.email}
            <br></br>
            {this.props.role}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default ProfilBlock