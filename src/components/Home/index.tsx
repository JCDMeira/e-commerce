import React from 'react';
import './styles.css';

export const Home: React.FC = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt="image to show e-commerce representation"
            className="home_container_image"
          />

          <div className="home_container_row"></div>
          <div className="home_container_row"></div>
          <div className="home_container_row"></div>
        </div>
      </div>
    </div>
  );
};
