import React, { useState, useEffect } from 'react';
import { Container, Row , Col, Button } from 'react-bootstrap';
import NavigationBar from './navbar';
import Product from './Product';
import { getallProducts } from '../services/api';

const  Products = () => {
  const [color, setColor] = useState("green");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getallProducts();
      setProducts(response.data);
    };
    fetchData();
  }, []);

  const buyProd = (produit) => {
    setColor("red");
  };

  return (
    <>
    
      <Container>      
        <Row>
          {products.map((prod, index) => (
            <Col key={index} md={4}>
              <Product produit={prod} buyProduit={buyProd} />
            </Col>
          ))}
        </Row>
       
       
      </Container>
    </>
  );
};

export default Products;
