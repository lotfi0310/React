import React from 'react';
import data from '../products.json';
import Product from './Product';

import { Container, Row , Col } from 'react-bootstrap';


export class Products extends React.Component {
    render() {
       return(
        

<> 
<Container className='products'>
  <Row>
    <Col>
    {data.map((prod,index)=>(
    <Product
  key={index}
  produit={prod}/>
  ))}
    </Col>
  </Row>
</Container>

 
   
   


</>);
         }
    
  }

