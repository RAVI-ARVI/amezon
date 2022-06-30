import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import SearchIcon from '@material-ui/icons/Search';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { useStateValue } from './StateProvider';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  // const [{ basket },dispatch]=useStateValue();
  // console.log({basket})
  return (
    <nav className='header'>


      <Link to='/'>
    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className='header_logo' srcset="" />
    </Link>
   
      <div className='header_serch'>
      <input type="text" className="header_serchinput" />
      <SearchIcon className='header_serchicon' /> </div>


    
      <div className="header_nav">

        <Link to="/login"  className='header_link'>
        <div className="header_option">
        <span className='header_optionlineone' >Hello Ravi</span>
        <span className='header_optionlinetwo' >Sign In</span>
        </div>
        </Link>



       
        <Link to="/login"  className='header_link'>
        <div className="header_option">
        <span  className='header_optionlineone' >Returns</span>
        <span className='header_optionlinetwo' >Order</span>
        </div>
        </Link>



     
        <Link to="/login"  className='header_link'>
        <div className="header_option">
        <span className='header_optionlineone' >Your</span>
        <span  className='header_optionlinetwo'>Prime</span>
        </div>
        </Link>

      </div>



     
      <Link to='/checkout' className='header_link'>
        <div className="header_basket">
          
            <ShoppingBasketIcon className='header_link' />
             
    
              
         
            <span  className='header_optionlinetwo header_basketcount'  >
              0
              {/* {basket.length} */}
              </span>
        </div>
      </Link>

    </nav>
  )
}

export default Header
