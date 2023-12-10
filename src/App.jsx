import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart'; // Import the Cart component

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} /> {/* Add this route for the Cart component */}
      </Routes>
    </>
  );
}

export default App;
