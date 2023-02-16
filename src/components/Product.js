
import React, { Component } from 'react';
import {Alert, Button, Card} from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
 export default class Product extends Component {
 constructor(props){
  super(props);
  this.state ={
    produit :this.props.produit,
    show:false
    
  };
 }
 likeProduct= (e)=>{
  e.preventDefault();
  this.setState((oldState)=>({produit:{...oldState.produit,like:oldState.produit.like+1}}));  
 }
 buyProduct=(e)=>{
e.preventDefault();
this.setState((oldState)=>({produit:{...oldState.produit,quantity:oldState.produit.quantity-1}}));

  this.setState({ show: true });
  setTimeout(() => {
    this.setState({ show: false });
  }, 2000);

 }
    render() {
      return (
       <Card style={{width:'18rem' ,margin:'10%'}} className="text-center" border='secondary'>
        <CardHeader>
        <Card.Img src={require('../assets/images/'+this.props.produit.img)}/>
        </CardHeader>
              <Card.Body>
                <Card.Title>{this.props.produit.name}</Card.Title>
                <Card.Text>
                  { this.props.produit.description}
                  <br/>
                  <br/>
                  <Row>
                    <Col md={6}>
                    {this.props.produit.price+'dt'}
                    </Col>
                    <Col md={6}>
                    {this.props.produit.quantity}

                    </Col>
                  </Row>
                 
                </Card.Text>
                <Row>
              <Col md={6}> 
               <Button  onClick={this.likeProduct} disabled={this.state.produit.like===5}
               >
             Like:{this.state.produit.like}
              </Button>
              </Col>
              <Col md={6}>
              <Button variant='success' onClick={this.buyProduct} disabled={this.state.produit.quantity===0}>Buy</Button>
              quantity:{this.state.produit.quantity}

              </Col>
            </Row>
              </Card.Body>
              <Alert show={this.state.show} variant="primary">You bought the Item named {this.state.produit.name}</Alert>

            
            
             
       </Card>
    
        
          
        
    );
}
  }