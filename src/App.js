import React from 'react';
import Pages from './components/Pages';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      role: false
    };

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  // componentDidMount() {
  //   this.intervalId = setInterval(() => {
  //     fetch("http://127.0.0.1/server/php/authentificate.php", {credentials: "same-origin"})
  //       .then((response) => response.json())
  //       .then((res) => {
  //         this.setState({
  //           auth: res['auth']
  //         })
  //         this.setState({
  //           role: res['role']
  //         })
  //         console.log(res)
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data:', error);
  //       });
  //   }, 10000);
  // }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      axios.get( "http://127.0.0.1/server/php/authentificate.php",{
        withcredentials: true
      })
      .then((response) => {
        // const {auth, role} = response.data
        // console.log(auth)
        // this.setState({ auth, role}) 
        return response
      })
      .catch((error) => {
        console.log(error)
      })

      // console.log(response['data'][auth])
      
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <Pages auth={this.state.auth} role={this.state.role} />
      </div>
    );
  }
}

export default App;