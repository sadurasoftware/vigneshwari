import React from 'react';
import Ecomstore from '../store/Ecomstore';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const products = Ecomstore((state) => state.products);
  const addToCart = Ecomstore((state) => state.addToCart);
  const user = Ecomstore((state) => state.user); // Check if user is registered

  return (
    <div className="products-page">
      <h1>Products</h1>

      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={`/${product.image}`} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              {/* <p>{product.description}</p> */}
              <p>Price: ₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>

              {/* "More Info" button */}
              <Link to={`/product/${product.id}`}>
                <button>More Info</button>
              </Link>

              {/* If user is registered, show cart summary and checkout link */}
              {user && (
                <div>
                  <Link to="/Cart">
                    <button>Go to Cart</button>
                  </Link>
                  <br />
                  <Link to="/Checkout">
                    <button>Checkout</button>
                  </Link>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
