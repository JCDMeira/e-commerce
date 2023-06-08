import React from 'react';
import './styles.css';

export const Product: React.FC = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>title</p>
        <p className="product__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="product__rating">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <p key={_ + i}>⭐</p>
            ))}
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt="product image"
      />

      <button onClick={() => console.log('teste')}>Add to Basket</button>
    </div>
  );
};
