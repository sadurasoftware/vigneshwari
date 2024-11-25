import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Ecomstore from '../store/Ecomstore';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams(); // Get productId from the URL
    const products = Ecomstore((state) => state.products);

    // Find the product with the matching ID
    const product = products.find((prod) => prod.id === parseInt(productId));

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="product-details-page">
            <h1 className="product-name">{product.name}</h1>
            <div className="product-detail-container">
                <img 
                    src={`/${product.image}`} 
                    alt={product.name} 
                    className="product-detail-image" 
                />
                <div className="product-info">
                    <p className="product-price"><strong>Price:</strong> ₹{product.price}</p>
                    <p className="product-description">
                        <strong> Description:</strong> {product.description}
                    </p>
                    <Link to="/ProductList" className="back-button">Back to Products</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
