import'../App.css'
import React from 'react';

import { FaCheck, FaMapMarkerAlt } from 'react-icons/fa';




const TabSection = () => {
  return (
  
      <div className="body-container">
        <div className="watermark text-7xl italic-text">PizzaHub: Order your customize pizza</div>
        
        <section className="bg-olive text-white flex h-screen justify-center">
          <div className='flex flex-col h-screen m-10 p-20'>
            <h2 className="text-4xl font-bold mb-10 text-center">DELIVERY TO THE DOORSTEP</h2>
            <div className='space-y-2'>
              <p className='flex space-x-3'><span className='text-white text-2xl'><FaCheck /></span>Choose your ingredients</p>
              <p className='flex space-x-3'><span className='text-white text-2xl'><FaCheck /></span>Get free delivery 24/7</p>
              <p className='flex space-x-3'><span className='text-white text-2xl'><FaCheck /></span>Special gift coupons</p>
            </div>
            <div className='m-4 space-x-2'>
              <input
                type="email"
                placeholder="Email"
                className="w-64 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <button className="bg-red-500 text-white px-8 py-2 rounded-r-md hover:bg-red-600 transition duration-300">
                Subscribe
              </button>
            </div>
            <div className='flex space-x-3'>
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <h2 className=" mb-4">Check Your Delivery Zone</h2>
            </div>
          </div>
          <div className='flex items-center'>
            <img
              src="https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Delicious Pizza"
              className="w-80 h-auto rounded-full"
            />
          </div>
        </section>
      </div>
    
  );
};




export default TabSection;





