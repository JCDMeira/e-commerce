import React from 'react';
import './styles.css';
import { ProductModel } from '../../Types';

export const Product: React.FC<ProductModel> = ({
  id,
  title,
  price,
  rating,
  imageUrl,
}) => {
  return (
    <div className="product" id={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {rating === 0 ? (
            <p>✩</p>
          ) : (
            Array(rating)
              .fill('')
              .map((_, i) => <p key={_ + i}>⭐</p>)
          )}
        </div>
      </div>

      <img src={imageUrl} alt="product image" />

      <button onClick={() => console.log('teste')}>Add to Basket</button>
    </div>
  );
};
