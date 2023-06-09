import React from 'react';
import './styles.css';
import CurrencyFormat from 'react-currency-format';
import { UseProductConsumer } from '../../contexts';

export const Subtotal: React.FC = () => {
  const { state } = UseProductConsumer();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal {state.basket.length} items: <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={state.total}
        fixedDecimalScale
        displayType={'text'}
        thousandSeparator={true}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};
