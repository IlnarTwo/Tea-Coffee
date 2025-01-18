import React from "react"
import Auth from "../pages/Auth"
import Cart from "../pages/Cart"
import Catalog from "../pages/Catalog"
import Regist from "../pages/Regist"

class Pages extends React.Component{
    renderSwitch(param){
        switch (param){
            case "auth":
                return <Auth />
            case "regist":
                return <Regist />
            case "catalog":
                return <Catalog />
            case "cart":
                return <Cart />
            default:
                return <Auth />
        }
    }
    render(){
        return(
            <div>
                {
                    this.renderSwitch(this.props.page)
                }            
            </div>
        )
    }
}

export default Pages