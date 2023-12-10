// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Menu from './Components/Menu/Menu';
import SuccessPage from './Components/SucessPage/SucessPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/success' element={<SuccessPage />} />  {/* Corrected path */}
      </Routes>
    </>
  );
}

export default App;


