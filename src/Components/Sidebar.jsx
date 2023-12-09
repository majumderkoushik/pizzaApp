// Sidebar.js
import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-white p-2 h-screen fixed top-0 left-0  flex flex-col justify-between items-center">
    
      <div className="text-center mb-8">
        <img
          src="https://image.similarpng.com/very-thumbnail/2020/12/Pizza-Hub-Logo-on-transparent-background-PNG.png"
          alt="Logo"
          className="w-20 h-20 mx-auto"
        />
      </div>

     
      <nav className="mb-8">
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Pages
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Menu
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Events
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Blog
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Landing
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Media Links */}
      <div className='flex flex-col justify-center items-center m-4 '>
        <div className="flex space-x-2 items-center my-3">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-500">
            <FaInstagramSquare />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaTwitter />
          </a>
        </div>
        <a href="#" className="bg-red-500 text-white px-4 py-2 mb-2 rounded-full">
          Order Online
        </a>
      </div>
    </div>
  );
};

export default Sidebar;





