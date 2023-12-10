import'../App.css'
// TabSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

const TabSection = () => {
  return (
    <div className="sidebar-container flex w-full justify-center">
      <div className="absolute top-2 right-2">
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/44/90/premium-quality-round-logo-badge-with-wheat-sticks-vector-13824490.jpg" 
          alt="Premium Quality Logo"
          className="w-20 h-20"
        />
      </div>

      <div className="watermark text-7xl italic-text">PizzaHub: Order your customize pizza</div>

      <section className="bg-olive text-white flex flex-col justify-center items-start m-20 space-y-7">
        <h2 className="text-4xl font-bold mb-6 text-center">DELIVERY TO THE DOORSTEP</h2>
        <div className="space-y-2">
          <p className="flex space-x-3">
            <span className="text-white text-2xl">
              <FaCheck />
            </span>
            Choose your ingredients
          </p>
          <p className="flex space-x-3">
            <span className="text-white text-2xl">
              <FaCheck />
            </span>
            Get free delivery 24/7
          </p>
          <p className="flex space-x-3">
            <span className="text-white text-2xl">
              <FaCheck />
            </span>
            Special gift coupons
          </p>
        </div>
        <div className="m-3 space-x-2">
          <input
            type="email"
            placeholder="Email"
            className="w-60 px-6 py-3 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="bg-red-500 text-white px-6 py-3 rounded-r-md hover:bg-red-600 transition duration-300">
            Subscribe
          </button>
        </div>
        <div className="flex space-x-3 mb-4">
          <FaMapMarkerAlt className="text-red-500 text-3xl" />
          <h2>Check Your Delivery Zone</h2>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Delicious Pizza"
          className="w-80 h-auto rounded-full"
        />
      </div>

      {/* Cart Icon */}
      <Link to="/cart" className="absolute right-2 bottom-2">
  <FaShoppingCart className="text-white text-3xl" />
</Link>
    </div>
  );
};

export default TabSection;



    
  









