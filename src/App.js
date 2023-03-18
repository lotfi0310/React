import './App.css';
import Products from './components/Products.js';
import { Route,Routes } from 'react-router-dom';
import Notfound from './components/notfound';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/addProduct';
import UpdateProduct from './components/updateProduct';
import React from 'react';
function App() {
  return (
   
<Routes>
  <Route path='/products' element={<><Products/></>}>
  </Route>
  <Route path='/productDetail/:id' element={<><ProductDetails/></>}>ProductDetail</Route>
  <Route path='/products/add' element={<><AddProduct/></>}>AddProduct</Route>
  <Route path="/products/edit/:id" element={<UpdateProduct/>}></Route>
  <Route path='*' element={<><Notfound/> </>}>NotFound</Route>

</Routes>
  

  );
 
}

export default App;