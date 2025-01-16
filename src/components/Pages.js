import React from "react"
import Auth from "../pages/Auth"
import Cart from "../pages/Cart"
import Catalog from "../pages/Catalog"
import Regist from "../pages/Regist"

class Pages extends React.Component{
  render(){
    return(
        <div>
        {
            this.props.page === "auth" && <Auth />
        }
        {
            this.props.page === "cart" && <Cart />
        }
        {
            this.props.page === "catalog" && <Catalog />
        }
        {
            this.props.page === "regist" && <Regist />
        }
            
    </div>
    )
  }
}

export default Pages