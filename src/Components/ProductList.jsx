import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

const ProductList = () => {
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
        url: 'https://pizzaallapala.p.rapidapi.com/productos',
        headers: {
          'X-RapidAPI-Key': 'e336e1308bmsh5846e21005d2038p11e03fjsn7beedc811928',
          'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log('Fetched Product Data:', response.data);
        setProducts(response.data.productos);
      } catch (error) {
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex justify-center items-center '>
     
        <div className='grid grid-cols-3 gap-12'>
          {products.map((product) => (
            <div key={product.id} className='flex items-center flex-col space-x-4 my-10 box relative group'>
              <img src={product.linkImagen} alt={product.nombre} style={{ width: 'full', height: '200px' }} className='rounded-full' />
              <div className='flex flex-col items-center space-y-2 mt-2'>
                <p>{product.nombre}</p>
                <p className='text-center'>{product.descripcion}</p>
                <p>Price: {product.precio}</p>
              </div>
             
              <div className='absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                <button
                  onClick={handleAddToCart}
                  className='bg-purple-600 text-white px-4 py-2 rounded-md shadow-md'
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleQuickView(product.id)}
                  className='bg-green-500 text-white px-4 py-2 rounded-md shadow-md'
                  style={{ marginLeft: '10px' }}
                >
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


































