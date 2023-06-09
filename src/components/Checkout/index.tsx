import React from 'react';
import './styles.css';
import { CheckoutProduct, Subtotal } from '..';
import { UseProductConsumer } from '../../contexts';

export const Checkout: React.FC = () => {
  const { state } = UseProductConsumer();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="add for amazon"
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {state.basket.map((product) => (
            <CheckoutProduct key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};
