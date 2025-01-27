import React from "react"
import { Link } from "react-router"

class Header extends React.Component{

  outputPage() {
    if (this.props.auth === true){
      if (this.props.role === "user"){
        return(
          <nav>
            <Link className="linkHeader" to={"http://127.0.0.1/server/php/exit.php"}>Exit</Link>
  
            <Link className="linkHeader" to="/catalog">Catalog</Link>
            <Link className="linkHeader" to="/cart">Cart</Link>
            <Link className="linkHeader" to="/payment">Payment</Link>  
          </nav>
        )
      }else{
        return(
          <nav>
            <Link className="linkHeader" to={"http://127.0.0.1/server/php/exit.php"}>Exit</Link>
  
            <Link className="linkHeader" to="/catalog">Catalog</Link>
            <Link className="linkHeader" to="/cart">Cart</Link>
            <Link className="linkHeader" to="/admin">Admin</Link>
            <Link className="linkHeader" to="/payment">Payment</Link>
          </nav>
        )
      }
    }else{
      return(
        <nav>
          <Link className="linkHeader" to="/">Auth</Link>
          <Link className="linkHeader" to="/regist">Regist</Link>
          <Link className="linkHeader" to={"http://127.0.0.1/server/php/exit.php"}>Exit</Link>
          
          <Link className="linkHeader" to="/catalog">Catalog</Link>
        </nav>
      ) 
    }
  }

  render(){
    return(
      <header className="header">
        {this.props.title}
        {this.outputPage()}
      </header>
    )
  }
}

export default Header