import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";

class Admin extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: "",
      category: "",
      discript: "",
      price: ""
    }

    this.onForm = this.onForm.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeCategory = this.handleChangeCategory.bind(this)
    this.handleChangeDiscript = this.handleChangeDiscript.bind(this)
    this.handleChangePrice = this.handleChangePrice.bind(this)
  }

  
  async onForm(event) {
    event.preventDefault()
    
    // var self = this

    axios.post( "http://127.0.0.1/server/php/addItem.php", {
      title: this.state.title,
      category: this.state.category,
      discript: this.state.discript,
      price: this.state.price
    })
    .then((response) => {
      console.log(response)
      // self.setState({auth: response['data']['auth']})
    })
    .catch((error) => {
      console.log(error)
    }) 

  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value})
  }
  handleChangeCategory(event) {
    this.setState({category: event.target.value})
  }
  handleChangeDiscript(event){
    this.setState({discript: event.target.value})
  }
  handleChangePrice(event){
    this.setState({price: event.target.value})
  }

  render(){
    return(
      <div>
        <Header title="Admin panel" auth={this.props.auth}/>
        <div className="container">
          <div className="rowBlock">
            <div className="col-md-6">
              Здесь возможно инфва об админе или еще что-то пока не придумал
            </div>
            <Form onSubmit={this.onForm} method="post" className="col-md-6 mx-auto">
              А здесь позже нужно добавить возможность загрузки картино
              <br />
              <br />
              <br />
              <br />
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthEmail">
                <Form.Label column sm="2">
                  Title
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    type="text"
                    name="title"
                    onChange={this.handleChangeTitle}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthPassw">
                <Form.Label column sm="2">
                  Category
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    type="text" 
                    name="category" 
                    onChange={this.handleChangeCategory} 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthPassw">
                <Form.Label column sm="2">
                  Discript
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    as="textarea" 
                    name="discript" 
                    onChange={this.handleChangeDiscript} 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthPassw">
                <Form.Label column sm="2">
                  Price
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    as="input"
                    type="number" 
                    name="price" 
                    onChange={this.handleChangePrice} 
                  />
                </Col>
              </Form.Group>
              <Button type="submit" className="col-md-5 mx-auto">
                Add item
              </Button>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Admin