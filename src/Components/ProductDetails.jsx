import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const options = {
        method: 'GET',
        url: `https://pizzaallapala.p.rapidapi.com/productos/${productId}`,
        headers: {
          'X-RapidAPI-Key': 'e336e1308bmsh5846e21005d2038p11e03fjsn7beedc811928',
          'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setProductDetails(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!productDetails) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>{productDetails.nombre}</h2>
      <p>Description: {productDetails.descripcion}</p>
      <p>Price: {productDetails.precio}</p>
      
    </div>
  );
};

export default ProductDetails;
