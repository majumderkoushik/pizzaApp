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
        src='src/Components/SucessPage/22.png'
        alt="Pizza Delivery"
        className="success-image"
      />
    </div>
  );
};

export default SuccessPage;

