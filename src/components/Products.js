import React, { useState, useEffect } from 'react';
import data from '../products.json';
import Product from './Product';
import { Container, Row , Col } from 'react-bootstrap';

const  Products = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
  }, []);

  const buyProd = (produit) => {
    setColor("blue");
  }

  return (
    <Container>
      <Row>
        {data.map((prod, index) => (
          <Col key={index} md={4}>
            <Product produit={prod} buyProduit={buyProd} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
