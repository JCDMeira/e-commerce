import React from 'react';
import './styles.css';
import { CheckoutProduct, Subtotal } from '..';

export const Checkout: React.FC = () => {
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
          <CheckoutProduct
            id={''}
            title={''}
            price={0}
            rating={0}
            imageUrl={''}
          />
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};
