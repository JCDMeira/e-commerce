import React from 'react';
import './styles.css';
import { ProductModel } from '../../Types';
import { UseProductConsumer } from '../../contexts';

export const CheckoutProduct: React.FC<ProductModel> = ({
  imageUrl,
  price,
  rating,
  title,
  id,
}) => {
  const { dispatch } = UseProductConsumer();

  const removeFromBasket = () => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id } });
  };
  return (
    <div className="checkoutProduct">
      <img src={imageUrl} alt="" className="checkoutProduct_image" />

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
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};
