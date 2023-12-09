// Modal.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ show, handleClose, productDetails }) => {
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
    maxWidth: '800px',
    width: '100%',
    position: 'relative', // Added to make positioning of close button absolute
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

  const productNameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const productPriceStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const productDescriptionStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const addToCartButtonStyle = {
    background: 'red',
    color: 'white',
    padding: '15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'flex-start', // Adjusted to align with the top of the details container
  };

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
          <p style={productPriceStyle}>Price: {productDetails?.precio}</p>
          <p style={productDescriptionStyle}>
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          </p>
          <button style={addToCartButtonStyle}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;













