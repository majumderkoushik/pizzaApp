import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Modal = ({ show, handleClose, productDetails }) => {
  const navigate = useNavigate();

 
  const generateRandomNutrition = () => {
    const randomValue = () => (Math.random() * 10 + 1).toFixed(2);
    return {
      calories: randomValue(),
      protein: randomValue(),
      fat: randomValue(),
      carbohydrates: randomValue(),
    };
  };

  const modalStyle = {
    display: show ? 'flex' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
    overflowY: 'auto',
  };

  const modalContentStyle = {
    display: 'flex',
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '1200px',
    width: '100%',
    position: 'relative',
  };

  const closeButtonStyle = {
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  };

  const imageContainerStyle = {
    flex: '1',
    marginRight: '20px',
  };

  const productImageStyle = {
    width: '100%',
    height: 'auto',
    background: '#eee',
    borderRadius: '8px',
  };

  const detailsContainerStyle = {
    flex: '1',
  };

  const boldStyle = {
    fontWeight: 'bold',
  };

  const productNameStyle = {
    fontSize: '24px',
    ...boldStyle,
    marginBottom: '10px',
  };

  const productPriceStyle = {
    fontSize: '20px',
    ...boldStyle,
    marginBottom: '10px',
  };

  const productDescriptionStyle = {
    fontSize: '16px',
    ...boldStyle,
    marginBottom: '20px',
  };

  const nutritionValueStyle = {
    fontSize: '16px',
    ...boldStyle,
    marginBottom: '10px',
  };

  const addToCartButtonStyle = {
    background: 'red',
    color: 'white',
    padding: '15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    marginTop: 'auto', 
  };

  const handleAddToCart = () => {
    navigate('/cart');
  };

  const randomNutritionValues = generateRandomNutrition();

  return (
    <div style={modalStyle} onClick={handleClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={handleClose}>
          <FaTimes />
        </button>
        <div style={imageContainerStyle}>
          <img src={productDetails?.linkImagen} alt={productDetails?.nombre} style={productImageStyle} />
        </div>
        <div style={detailsContainerStyle}>
          <h2 style={productNameStyle}>{productDetails?.nombre}</h2>
          <p style={productPriceStyle}>Price: ${parseFloat(productDetails?.precio).toFixed(2)}</p>
          <p style={productDescriptionStyle}>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </p>
          <p style={nutritionValueStyle}>
            Nutrition Values (per 100g):
            <br />
            Calories: {randomNutritionValues.calories} kcal, Protein: {randomNutritionValues.protein}g, Fat: {randomNutritionValues.fat}g, Carbohydrates: {randomNutritionValues.carbohydrates}g
          </p>
          <button style={addToCartButtonStyle} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

















