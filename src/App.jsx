import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import ProductList from './Components/ProductList'; // Import ProductList component
import ProductDetails from './Components/ProductDetails'; // Import ProductDetailsPage component

function App() {
  return (
    <>
<Routes>
     <Route path='/' element={<Home />} />
     <Route path='/products' element={<ProductList />} />
     <Route path='/product/:productId' element={<ProductDetails />} />
</Routes>
    </>
  );
}

export default App;
