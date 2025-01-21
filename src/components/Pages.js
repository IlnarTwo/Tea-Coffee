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
                        <Route path="/" element={<Auth />} />
                        <Route path="/regist" element={<Regist />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/payment" element={<Payment />} />
                    </Routes>
                </BrowserRouter>
            </div>    
        )
    }
}

export default Pages