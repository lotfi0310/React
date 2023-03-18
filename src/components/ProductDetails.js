import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
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
          <Card style={{ width: "20em" }} class="bestProduct">
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
            <Button onClick={()=>
             navigate(`/products/edit/${product.id}`)
              } >Update</Button>
          </Card>
        </>
      ) : (
        <h2>product does not exist</h2>
      )}
    </>
  );
         }
export default ProductDetails;
