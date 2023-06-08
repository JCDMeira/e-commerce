import { Search, ShoppingBasket, Storefront } from '@material-ui/icons';
import './styles.css';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <Storefront fontSize="large" className="header_logo_image" />
        <h2 className="header_logo_title">eShopp</h2>
      </div>

      <div className="header_search">
        <input type="text" className="header_search_input" />
        <Search className="header_search_icon" />
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign in</span>
        </div>

        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>

        <div className="nav_item">
          <ShoppingBasket />
          <span className="nav_itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
};
