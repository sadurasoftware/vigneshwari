import React, { useState } from 'react';
import Ecomstore from '../store/Ecomstore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Checkout.css';

const Checkout = () => {
  const cart = Ecomstore((state) => state.cart);
  const clearCart = Ecomstore((state) => state.clearCart);
  const user = Ecomstore((state) => state.user); // Get user data from Zustand
  const navigate = useNavigate();

  // If user is not registered, redirect to RegisterForm
  if (!user) {
    navigate('/RegisterForm');
    return null;
  }

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const [name, setName]= useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!shippingAddress || !name) {
      setError('Please fill out the above fields.');
      return;
    }

    console.log('Order placed successfully!', {
      name,
      shippingAddress,
      items: cart,
      total: calculateTotal(),
    });

    clearCart();
    setName('');
    setShippingAddress('');
    setError('');
    navigate('/ProductList'); // Redirect to ProductList after successful order
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before proceeding to checkout.</p>
      ) : (
        <>
          <div className="checkout-summary">
            <h3>Cart Summary</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p><strong>Total: ₹{calculateTotal()}</strong></p>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
          <label htmlFor="Name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <label htmlFor="shippingAddress">Shipping Address:</label>
            <input
              type="text"
              id="shippingAddress"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="Enter your shipping address"
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
