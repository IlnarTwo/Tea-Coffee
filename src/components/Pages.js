import React from "react"
import { BrowserRouter, Routes, Route } from "react-router";
import Auth from "../pages/Auth"
import Cart from "../pages/Cart"
import Catalog from "../pages/Catalog"
import Regist from "../pages/Regist"
import Admin from "../pages/Admin"
import Payment from "../pages/Payment";

class Pages extends React.Component {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Auth auth={this.props.auth}/>} />
                        <Route path="/regist" element={<Regist auth={this.props.auth}/>} />
                        <Route path="/catalog" element={<Catalog auth={this.props.auth}/>} />
                        <Route path="/cart" element={<Cart auth={this.props.auth}/>} />
                        <Route path="/admin" element={<Admin auth={this.props.auth} role={this.props.role}/>} />
                        <Route path="/payment" element={<Payment auth={this.props.auth}/>} />
                    </Routes>
                </BrowserRouter>
            </div>    
        )
    }
}

export default Pages