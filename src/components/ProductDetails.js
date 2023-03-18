import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getallProducts } from '../services/api';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
   const navigate=useNavigate();

  useEffect(() => {
    loadProductData();
  });

  const loadProductData = async () => {
    const response = await getallProducts(id);
    setProduct(response.data);
  };

  return (
    <>
      {product ? (
        <>
        <Container >
          <Row className='justify-content-center'>
            <Col md={6}>

            <Card style={{ width: "35em" , marginTop:'5%' }} class="bestProduct">
            <Card.Img
              variant="top"
              src={require("../assets/images/" + product.img)}
            />
            <Card.Body>
              <Card.Text>{product.name}</Card.Text>
              <Card.Text> {product.price}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.quantity}</Card.Text>
              <Card.Text> likes :{product.like}</Card.Text>
              <Button variant="primary" href="/products">
                return to products
              </Button>
            </Card.Body>
           
          </Card>

            </Col>
          </Row>
        </Container>
        
        </>
      ) : (
        <Container  >
          <Row classname="justify-content-center"style={{backgroundColor:'red'}}>
            <Col md={6}>
            <h1 style={{textAlign:'center' , padding:'5%'}}>product does not exist</h1>
            </Col>
          </Row>
        </Container>
      
      )}
    </>
  );
         }
export default ProductDetails;
