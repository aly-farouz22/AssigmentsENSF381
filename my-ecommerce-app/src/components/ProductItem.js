import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  const { id, name, description, price, image } = product;

  return (
    <div className="product-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
