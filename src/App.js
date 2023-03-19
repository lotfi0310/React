import './App.css';
import { Route,Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import NavigationBar from './components/navbar';
import store from "./redux/store";
import { Provider } from 'react-redux';
const Products = React.lazy(() => import("./components/Products"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));
const AddProduct = React.lazy(() => import("./components/addProduct"));
const UpdateProduct = React.lazy(() => import("./components/updateProduct"));
const Notfound = React.lazy(() => import("./components/notfound"));
function App() {
  return (
   <div>
        <Provider store={store}>
    <NavigationBar />
<Suspense fallback={<p>chargements... </p>}>
  <Routes>
   
  <Route path='/' element={<><Products/></>}></Route>
  <Route path='/products' element={<><Products/></>}></Route>
  <Route path='/productDetail/:id' element={<><ProductDetails/></>}>ProductDetail</Route>
  <Route path='/products/add' element={<><AddProduct/></>}>AddProduct</Route>
  <Route path="/products/edit/:id" element={<UpdateProduct/>}></Route>
  <Route path='*' element={<><Notfound/> </>}>NotFound</Route>

</Routes>
</Suspense>
</Provider>

   </div>

  

  );
 
}

export default App;