import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../products.json';
import {Image} from 'react-bootstrap';
function ProductDetails() {
const {name}= useParams();
console.log(name);
 const getprod= data.filter((x)=>
  x.name===name
 )[0]

 
  return (
    <Suspense fallback={<p>Loading..</p>}>
    <Container>
        <h1>{getprod.name}</h1>
         <Image src={require('../assets/images/' +getprod.img)}></Image>
      </Container>
    </Suspense>
  );
}

export default ProductDetails
