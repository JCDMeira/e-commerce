import { Search, ShoppingBasket, Storefront } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './styles.css';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to={'/'}>
        <div className="header_logo">
          <Storefront fontSize="large" className="header_logo_image" />
          <h2 className="header_logo_title">eShopp</h2>
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="header_search_input" />
        <Search className="header_search_icon" />
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_item_lineOne">Hello Guest</span>
          <span className="nav_item_lineTwo">Sign in</span>
        </div>

        <div className="nav_item">
          <span className="nav_item_lineOne">Your</span>
          <span className="nav_item_lineTwo">Shop</span>
        </div>

        <Link to={'/checkout'}>
          <div className="nav_item nav_item_basket">
            <div className="nav_item_icon">
              <ShoppingBasket className="nav_item_basket" />
            </div>
            <span className="nav_item_lineTwo nav__basket_count">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
