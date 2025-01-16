import React from 'react';
import Pages from './components/Pages';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: "auth"
        }

    } 

    render(){
        return (
            <Pages page={this.state.page}/>
        )
    }

}

export default App