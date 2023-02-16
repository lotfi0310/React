import React from 'react';
import data from '../products.json';
import Product from './Product';

import { Container, Row , Col } from 'react-bootstrap';


export class Products extends React.Component {

  constructor(props){
    super(props);
    this.state={
      color:"green" 
    }
  }

  componentDidMount(){
  }
   buyProd=(produit)=>{
this.setState(()=>({

}))
   }

    render() {
       return(

<Container>
  
  <Row>
    {data.map((prod,index)=>(
      <Col key={index} md={4}>
    <Product
  produit={prod}
  buyProduit={this.buyProd}/>
  </Col>
  ))}
  </Row>
  
</Container>

 
   
   


);
         }
    
  }

