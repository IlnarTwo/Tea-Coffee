import React from 'react';
import Pages from './components/Pages';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: "admin",
            authentificate: false
        }

    } 

    async getData() {
        const url = "http://127.0.0.1/server/php/authentificate.php";
        try {
            const response = await fetch(url, {mode: "no-cors"});
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
            console.log(response.status);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }
    }

    render(){
        return (
            <div>
                <Pages page={this.state.page}/>
            </div>
        )
    }

    
      

}

export default App