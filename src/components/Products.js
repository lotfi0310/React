import React, { useState, useEffect } from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import Product from './Product';
import { getallProducts } from '../services/api';
import { useSelector } from 'react-redux';
import { fetchProducts, selectProduct, selectProducts } from '../redux/slices/productsSlice';
import { useDispatch } from 'react-redux';

const  Products = () => {
  const [color, setColor] = useState("green");
  const [products, errors] = useSelector(selectProducts);
  const dispatch=useDispatch();
  useEffect(() => {
      dispatch(fetchProducts());    
  }, [dispatch]);

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
