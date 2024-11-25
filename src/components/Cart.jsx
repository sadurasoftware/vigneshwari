import React from 'react';
import { Link } from 'react-router-dom'; 
import Ecomstore from '../store/Ecomstore';
import './Cart.css';

const Cart = () => {
  // Access the cart state and actions from Zustand store
  const cart = Ecomstore((state) => state.cart);
  const removeFromCart = Ecomstore((state) => state.removeFromCart);
  const clearCart = Ecomstore((state) => state.clearCart);
  const increaseQuantity = Ecomstore((state) => state.increaseQuantity);
  const decreaseQuantity = Ecomstore((state) => state.decreaseQuantity);

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle removing an item from the cart
  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart-page">
        
      <h1>Your Cart</h1>
      {/* Display message when cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some items to your cart!</p>
        
      ) : (
        
        <div>
          {/* Display all items in the cart */}
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <h2>{item.name}</h2>
                <p>Price:  ₹{item.price}</p>

                {/* Quantity controls */}
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Display total price */}
          <div className="cart-summary">
            <h3>Total:  ₹{calculateTotal()}</h3>
            <button onClick={clearCart} className="clear-cart">Clear Cart</button>
            {/* <button><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Continue Shopping</Link></button> */}
          </div>
          <div className="continue-shopping">
        <button className="continue-shopping-button">
          <Link to="/ProductList" style={{ textDecoration: 'none', color: 'white' }}>Continue Shopping</Link>
        </button>
      </div>
      <div className="checkout-button">
              <Link to="/Checkout">
                <button className="checkout-btn">Proceed to Checkout</button>
              </Link>
            </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
