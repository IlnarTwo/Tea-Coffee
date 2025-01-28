import React from "react"
import { Button, Col, Form, Row } from "react-bootstrap";

class FormCatalog extends React.Component{
  render(){
    return(
      <div>
        <Form onSubmit={this.onForm} method="post" className="col-md-12 mx-auto">
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
                Searche
            </Button>
        </Form>
      </div>
    )
  }
}

export default FormCatalog