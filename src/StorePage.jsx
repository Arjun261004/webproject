import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const products = [
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    image: '/images/ip161.jpg',
    price: 'From $799',
    category: 'iphone'
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    image: '/images/ip16pro1.jpg',
    price: 'From $999',
    category: 'iphone'
  },
  {
    id: 'watch',
    name: 'Apple Watch Series 9',
    image: '/images/apw.jpg',
    price: 'From $399',
    category: 'watch'
  },
  {
    id: 'macbook-air',
    name: 'MacBook Air',
    image: '/images/mba.jpg',
    price: 'From $999',
    category: 'mac'
  },
  {
    id: 'macbook-pro',
    name: 'MacBook Pro',
    image: '/images/mbp.jpg',
    price: 'From $1999',
    category: 'mac'
  },
  {
    id: 'ipad-mini',
    name: 'iPad mini',
    image: '/images/ipm.jpg',
    price: 'From $499',
    category: 'ipad'
  },
  {
    id: 'ipad-pro',
    name: 'iPad Pro',
    image: '/images/ipp.jpg',
    price: 'From $799',
    category: 'ipad'
  }
];

const StorePage = () => {
  return (
    <div className="store-page">
      <div className="store-header">
        <h1>Apple Store</h1>
        <p>Shop the latest products and accessories</p>
      </div>
      
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/learn/${product.id}`} key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
                loading="lazy"
              />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="view-product-button">Learn more</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StorePage;