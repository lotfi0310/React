
import React, { Component } from 'react';
import {Button, Card, Container} from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap'
 export default class Product extends Component {
 constructor(props){
  super();
  this.state ={
     likes :0
  };
 }
    render() {
      return (
<> 
       <Card >

              <Card.Body >
              <Card.Img src={require('../assets/images/'+this.props.produit.img)}/>
                <Card.Title>{this.props.produit.name}</Card.Title>
                <Card.Text>
                  { this.props.produit.description}
                  <br/>
                  <br/>
                  {this.props.produit.price+'dt'}
                </Card.Text>
              </Card.Body>
           <Container >
            <Row>
              <Col> 
               <Button  style={{width:'20%' ,display:'flex' ,justifyContent:'space-between',marginLeft:'35%',flexDirection:'row',marginBottom:'3%'}}
                onClick ={
                  ()=>{
                    this.setState({ likes: this.state.likes+1 });
                    }} >
                Like {this.state.likes}
              </Button>
              </Col>
              <Col>
              <Button style={{backgroundColor: '#00FFFF',width:'20%' ,display:'flex' ,justifyContent:'space-between',flexDirection:'row',marginBottom:'3%'}}>Buy</Button>
              </Col>
            </Row>
           </Container>
            
             
       </Card>
    
</>   
        
          
        
    );
}
  }