

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';
import productsData from '../data/products';
import logo from '../logo.svg';

const Productpage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if (existingCartItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td><ProductList products={productsData} addToCart={addToCart} /></td>
          <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} removeFromCart={removeFromCart} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
