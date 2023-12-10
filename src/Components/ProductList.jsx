import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

const ProductList = ({ searchFilter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
        headers: {
          'X-RapidAPI-Key': '272c08ead0mshb4c2a52e10bc8fcp133381jsne46bdb03cf3e',
          'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log('Fetched Product Data:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleQuickView = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    setSelectedProductId(productId);
    setShowModal(true);
    setProductDetails(selectedProduct);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    
    navigate('/cart'); 
  };

  return (
    <div className="flex justify-center p-20 mx-20 items-center w-full">
      <div className="grid grid-cols-4 gap-8 ">
        {products
          .filter((product) =>
            searchFilter ? product.name.toLowerCase().includes(searchFilter.toLowerCase()) : true
          )
          .map((product) => (
            <div key={product.id} className="relative group box items-center flex justify-center flex-col">
              <img
                src={product.img}
                alt={product.name}
                style={{ width: 'full', height: '200px' }}
              />
              <div className="flex items-center flex-col space-x-4 my-10">
                <p className='font-bold'>{product.name}</p>
                <p className="text-center">{product.description}</p>
                <p>Price: {product.price*50}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2">
                  Add to Cart
                </button>
                <button onClick={() => handleQuickView(product.id)} className="bg-green-500 text-white px-4 py-2">
                  Quick View
                </button>
              </div>
            </div>
          ))}
      </div>

      <Modal show={showModal} handleClose={handleCloseModal} productDetails={productDetails} />
    </div>
  );
};

export default ProductList;
























