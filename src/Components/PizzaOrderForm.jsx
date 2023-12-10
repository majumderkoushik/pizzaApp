import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const PizzaOrderForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    slices: '',
    size: '8',
    toppings: [],
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your validation logic here
    // For example, check if all required fields are filled

    // Assuming the form is valid, proceed to submit
    console.log('Form Data:', formData);

    // Add your logic for handling the form data (e.g., sending it to a server)

    // Redirect to success page upon successful submission
    navigate('/success');
  };

  return (
    <div
      className="flex flex-col items-center h-screen bg-cover"
      style={{
        backgroundImage:
          'url(https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center text-green-800">WELCOME TO PIZZAHUB</h1>
      <p className="text-sm mb-8 text-center text-white">
        We deliver pizza in 40 minutes max. If not, Pizza is on us!
      </p>
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-md max-w-md text-gray-800">
        <form onSubmit={handleSubmit}>
          <label className="block mb-4" htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border p-2 rounded mt-1"
              required
            />
          </label>

          <label className="block mb-4" htmlFor="phone">
            Phone:
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border p-2 rounded mt-1"
              required
            />
          </label>

          <label className="block mb-4" htmlFor="slices">
            Number of Slices:
            <input
              type="number"
              id="slices"
              name="slices"
              min={4}
              max={12}
              className="w-full border p-2 rounded mt-1"
              required
            />
          </label>

          <label className="block mb-4" htmlFor="size">
            Pizza Size:
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            >
              <option value="8">8 inches</option>
              <option value="12">10 inches</option>
              <option value="16">12 inches</option>
              <option value="20">14 inches</option>
            </select>
          </label>

          <label className="block mb-4">
            Toppings:
            <div className="flex flex-row space-x-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="toppings"
                  value="onion"
                  className="mr-2"
                />
                Onion
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="toppings"
                  value="sausage"
                  className="mr-2"
                />
                Sausage
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="toppings"
                  value="mushroom"
                  className="mr-2"
                />
                Mushroom
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="toppings"
                  value="cheese"
                  className="mr-2"
                />
                Cheese
              </label>
            </div>
          </label>

          <label className="block mb-6">
            <input
              type="checkbox"
              name="agree"
              className="mr-2"
              required
            />
            I agree to the terms and conditions
          </label>

          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 w-full rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PizzaOrderForm;








