import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://pizzaallapala.p.rapidapi.com/productos',
        headers: {
          'X-RapidAPI-Key': 'e336e1308bmsh5846e21005d2038p11e03fjsn7beedc811928',
          'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='flex justify-center p-20 m-20'>
      <div className='grid grid-cols-4 gap-8'>
        {products.map((product) => (
          <div key={product.id} className='flex items-center flex-col space-x-4 my-10'>
            <img src={product.linkImagen} alt={product.nombre} style={{ width: 'full', height: '100px' }} className='rounded-full'/>
            <p>{product.nombre}</p>
            <p className='text-center'>{product.descripcion}</p>
            <p>Price: {product.precio}</p>
            {/* You can add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;










