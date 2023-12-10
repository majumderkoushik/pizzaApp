
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch && onSearch(searchTerm);
  };

  return (
    <div className="bg-white p-2 w-full flex justify-between items-center">
      <div className="text-center">
        <img
          src="https://image.similarpng.com/very-thumbnail/2020/12/Pizza-Hub-Logo-on-transparent-background-PNG.png"
          alt="Logo"
          className="h-16"
        />
      </div>

      <nav className="flex items-center">
        <ul className="flex space-x-4">
          <li className="mb-2"><NavLink to="/" className="text-blue-500 hover:text-blue-700">Home</NavLink></li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Pages
            </a>
          </li>
          <li className="mb-2">
            <NavLink to="/menu" className="text-blue-500 hover:text-blue-700">
              Menu
            </NavLink>
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

      <div className="flex items-center space-x-2">
        <NavLink to="/cart" className="text-gray-600 hover:text-blue-500">
          <FaShoppingCart />
        </NavLink>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-full py-1 px-3 focus:outline-none"
          />
          <span className="absolute right-3 top-2 cursor-pointer" onClick={handleSearch}>
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

