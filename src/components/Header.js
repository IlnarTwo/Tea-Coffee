import React from "react"
import { Link } from "react-router"

class Header extends React.Component{
  render(){
    return(
      <header className="header">
        {this.props.title}
        <nav>
          <Link className="" to="/">Auth</Link>
          <Link className="" to="/regist">Regist</Link>
          <Link className="" to="/catalog">Catalog</Link>
          <Link className="" to="/cart">Cart</Link>
          <Link className="" to="/admin">Admin</Link>
          <Link className="" to="/payment">Payment</Link>
        </nav>
      </header>
    )
  }
}

export default Header