import React, { useContext } from 'react'
import './Header.css'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { shopContext } from '../../../../pages/shopcontext';
const Header = () => {
  const {Cart ,searchItem,handleKeyPress,searchhandleInputChange} = useContext(shopContext)
  // const totalItemsInCart = Object.values(Cart).reduce((acc, itemCount) => acc + itemCount, 0);
  const uniqueItemsInCart = Object.values(Cart).filter(itemCount => itemCount > 0).length;
  return (
    <div className='Header'>
       <header>
          <Link to = "/" ><h2>Shopfier</h2></Link>
          <div className='searchContainer'>
             <input type="search"
              placeholder='Search'
              value={searchItem}
              onChange={searchhandleInputChange}
              onKeyDown={handleKeyPress} />        
          </div>
            <nav className='Navigation'>
                <ol>
                    <li><Link to = "/" >Shop</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><Link to= "/Cart"><CiShoppingCart className='Cart'/></Link>                     
                      {uniqueItemsInCart > 0 ?<span className='cartVal'> {uniqueItemsInCart} </span> : ''}                     
                    </li>
                </ol>
            </nav>
       </header>
    </div>
  )
}

export default Header
