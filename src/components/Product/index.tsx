import React from 'react';
import './styles.css';
import { ProductModel } from '../../Types';
import { UseProductConsumer } from '../../contexts';

export const Product: React.FC<ProductModel> = (props) => {
  const { id, title, price, rating, imageUrl } = props;
  const { dispatch } = UseProductConsumer();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        ...props,
      },
    });
  };

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

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};
