import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  editProduct,
  getallProducts,
} from "../services/api";

export default function UpdateProduct(props) {
  const { id } = useParams();

  const [Product, setProduct] = useState({
    name: "",
    price: "",
    img: "",
    like: "",
    quantity: "",
    description: "",
  });

    
  useEffect(() => {
    loadProductData();
  }, []);

  const loadProductData = async () => {
    const response = await getallProducts(id);
    setProduct(response.data);
  };
  const navigate = useNavigate();
  const handleChange = (event) => {
    event.preventDefault();
    setProduct({ ...Product, [event.target.name]: event.target.value });
    console.log(Product);
  };
  const handleChangeFile = (event) => {
    event.preventDefault();
    setProduct({ ...Product, img:event.target.files[0].name  });
    console.log(Product);
  };
  const edit = (e) => {
    e.preventDefault();
    editProduct(id, Product).then(() => navigate("/products"));
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
         
            type="text"
            value={Product.name}
            name="name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={Product.description}
            name="description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={Product.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={Product.quantity}
            onChange={handleChange}
          />


          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            onChange={handleChangeFile}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={edit}>
          update Product
        </Button>
        <Button variant="gray" type="reset">
          Save
        </Button>
      </Form>
    </Container>
  );
}