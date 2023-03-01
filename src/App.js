import './App.css';
import Products from './components/Products.js';
import { Route,Routes } from 'react-router-dom';
import Notfound from './components/notfound';
import ProductDetails from './components/ProductDetails';
import React from 'react';
function App() {
  return (
   
<Routes>
  <Route path='/products' element={<><Products/></>}>
  </Route>
  <Route path='/productDetail/:name' element={<><ProductDetails/></>}>ProductDetail</Route>

  <Route path='*' element={<><Notfound/> </>}>NotFound</Route>

</Routes>
  

  );
 
}

export default App;