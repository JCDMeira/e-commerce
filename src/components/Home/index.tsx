import React from 'react';
import './styles.css';
import { Product } from '..';
import { data } from '../../data';

export const Home: React.FC = () => {
  const firstRowProducts = data.slice(0, 2);
  const secondRowProducts = data.slice(2, 5);
  const thirdRowProducts = data[5];

  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt="image to show e-commerce representation"
            className="home_container_image"
          />

          <div className="home_container_row">
            {firstRowProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
          <div className="home_container_row">
            {secondRowProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
          <div className="home_container_row">
            <Product {...thirdRowProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};
