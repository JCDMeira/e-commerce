import React from 'react';
import './styles.css';
import { ProductModel } from '../../Types';

export const CheckoutProduct: React.FC<ProductModel> = ({
  imageUrl,
  id,
  price,
  rating,
  title,
}) => {
  return (
    <div className="checkoutProduct" id={id}>
      <img src={imageUrl} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill('')
            .map((_, i) => (
              <p key={_ + i}>⭐</p>
            ))}
        </div>
        <button onClick={() => console.log('remove')}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};
