import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Users from "../components/Users";
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
              <Users />
            </div>
            <Form onSubmit={this.onForm} method="post" className="col-md-6 mx-auto">
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthEmail">
                <Form.Label column sm="2">
                  Изображение
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    type="file"
                    name="img"
                    style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthEmail">
                <Form.Label column sm="2">
                  Название
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    type="text"
                    name="title"
                    onChange={this.handleChangeTitle}
                    required
                    style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthPassw">
                <Form.Label column sm="2">
                  Категория
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    type="text" 
                    name="category" 
                    onChange={this.handleChangeCategory} 
                    required
                    style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthPassw">
                <Form.Label column sm="2">
                  Описание
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    as="textarea" 
                    name="discript" 
                    onChange={this.handleChangeDiscript} 
                    required
                    style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="formAuthPassw">
                <Form.Label column sm="2">
                  Цена
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    as="input"
                    type="number" 
                    name="price" 
                    onChange={this.handleChangePrice} 
                    required
                    style={{ borderRadius: '5px', borderColor: '#d3c1b2' }}
                  />
                </Col>
              </Form.Group>
              <Button 
                type="submit" 
                className="col-md-5 mx-auto"
                style={{ backgroundColor: '#8b7355', borderColor: '#8b7355', borderRadius: '5px', fontFamily: 'Georgia, serif' }}
                >
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