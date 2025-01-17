import React from 'react';
import Pages from './components/Pages';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: "catalog",
            authentidicat: false
        }

    } 

    async getData() {
        const url = "https://example.org/products.json";
        try {
            const response = await fetch(url);
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