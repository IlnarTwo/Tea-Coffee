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
            
        }


    } 

    render(){
        return (
            <div>
                <Auth />
            </div>
        )
    }

}

export default App