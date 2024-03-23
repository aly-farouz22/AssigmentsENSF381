import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, quantity, image } = item;
  const totalPrice = price * quantity;

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
