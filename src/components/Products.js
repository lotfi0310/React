import React from 'react';
import data from '../products.json';
import Product from './Product';



export class Products extends React.Component {
    render() {
       return(

<>

{data.map((prod,index)=>(
  <Product
  key={index}
  produit={prod}/>
))}
</>);
         }
    
  }

