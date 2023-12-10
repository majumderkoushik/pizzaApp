import React from 'react';
import Navbar from './Navbar';
import MenuLight from './MenuLight';
import ProductList from '../ProductList';


function Menu() {
  return (
    <>
    <Navbar />
    <div className='flex h-64'>
    <MenuLight />
    </div>
   
     
    </>
  );
}

export default Menu;

