import React from 'react'
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider.';
function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
  
    <div className='Header'>
      <Link to="/">
      <img
      className="header__logo"
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>
          <div className='Header_SearchBar'>
              <input className='Header__Search_input' type="text">
        </input>
        <SearchIcon className='Header__SearchIcon'/>
      </div>
      <div className='header__nav'>
        <Link to="/login">
        <div className='header_option'>
          <span className='header__optionLineOne'>Hello</span>
          <span className='header__optionLineTwo'>Guest</span>
          </div>
          </Link>

        <div className='header_option'>
        <span className='header__optionLineOne'>Returns</span>
        <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header_option'>
      <span className='header__optionLineOne'>Your</span>
      <span className='header__optionLineTwo'>Prime</span>
        </div>
<Link to="/checkout">
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}</span>
             
          </div>
          </Link>

          
      </div>
          
    </div>
  )
}

export default Header;
