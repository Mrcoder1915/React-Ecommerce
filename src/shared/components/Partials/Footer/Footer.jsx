import React, {useContext} from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { shopContext } from '../../../../pages/shopcontext';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import './Footer.css'
const Footer = () => {
  const {Cart ,searchItem,handleKeyPress,searchhandleInputChange} = useContext(shopContext)
  const uniqueItemsInCart = Object.values(Cart).filter(itemCount => itemCount > 0).length;
  return (
    <div className='Footer'>
       <footer>
          <h3>&copy;2024</h3>
          <span className='cart'><Link to= "/Cart"><CiShoppingCart className='Cart'/></Link>                     
                      {uniqueItemsInCart > 0 ?<span className='cartVal'> {uniqueItemsInCart} </span> : ''}                     
          </span>
          <div className='Home-profile'>
            <span>
                <Link to={'/'}><IoHomeOutline/></Link>
            </span>
            <span>
                <Link to = {'./Profile'}><CgProfile/></Link>
            </span>
          </div>
       </footer>
    </div>
  )
}

export default Footer
