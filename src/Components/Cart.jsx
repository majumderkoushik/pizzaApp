// Cart.js
import React from 'react';
import Sidebar from './Sidebar';
import PizzaOrderForm from './PizzaOrderForm';

const Cart = () => {
  const cartStyle = {
    backgroundImage: 'url("https://media.istockphoto.com/id/1220637189/photo/pizza-ingredients-and-raw-dough-on-table-making-pizza-concept.jpg?s=612x612&w=0&k=20&c=LJNI_7yHDiFsU4cxXaVoo8XrSur5N72vtFvKUeqVpcA=")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#fff', 
    padding: '20px',
  };

  return (
    <>
      
        <PizzaOrderForm />
      
    
    </>
  );
};

export default Cart;


