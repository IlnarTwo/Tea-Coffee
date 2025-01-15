import React from 'react';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Buy from './components/Buy';
import Regist from './pages/Regist';
import Auth from './pages/Auth'; 
import Button from 'react-bootstrap/Button';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: "auth"
        }

    } 

    render(){
        return (
            <div>
                {
                    this.state.page === "auth" && <Auth />
                }
                {
                    this.state.page === "cart" && <Cart />
                }
                {
                    this.state.page === "catalog" && <Catalog />
                }
                {
                    this.state.page === "regist" && <Regist />
                }
                    
            </div>
        )
    }

}

export default App