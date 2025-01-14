import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
            <Header title="Tea&Coffee" />
                <div className='container'>
                    <h1>Авторизация</h1>
                    <Auth />
                </div>
            <Footer />
            </div>
        )
    }

}

export default App