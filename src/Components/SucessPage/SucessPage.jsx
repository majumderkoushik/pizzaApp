import React from 'react';
import { NavLink } from 'react-router-dom';
import './SuccessPage.css'; 

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen success-page">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-800">
        Order Successful!
      </h1>
      <p className="text-lg text-center text-gray-800">
        Thank you for choosing Pizzahub. Your order is on the way!
      </p>
      <img
        src='https://tse2.mm.bing.net/th?id=OIP.x1dtrZOUYvmbeedh_XNIpQHaFt&pid=Api&P=0&h=180'
        alt="Pizza Delivery"
        className="success-image"
      />
      <button className='px-6 py-2'>
      <NavLink to="/" className="text-blue-500 hover:text-blue-700">Home</NavLink>
      </button>
      
    </div>
  );
};

export default SuccessPage;

