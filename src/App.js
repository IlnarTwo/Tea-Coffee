import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Buy from './components/Buy';
import Regist from './components/Regist';
import Auth from './components/Auth'; 

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }


    } 

    render(){
        return (
            <div>
            <Header title="Shapkaaaaa///opj" />
                авторизация
            <Footer />
            </div>
        )
    }

}

export default App