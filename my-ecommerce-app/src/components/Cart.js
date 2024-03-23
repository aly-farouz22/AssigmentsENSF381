import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
