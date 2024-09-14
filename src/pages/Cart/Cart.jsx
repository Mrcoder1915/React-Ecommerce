import React, {useContext, useEffect} from 'react'
import './Cart.css'
import { Items } from '../../ProductDb'
import CartCard from './CartCard'
import { shopContext } from '../shopcontext'
import { Link, useLocation } from 'react-router-dom'
const Cart = () => {
    const {Cart,totalCartItem,setChecked} = useContext(shopContext)
    const total = totalCartItem()
    const location = useLocation();
    const inCart = Object.values(Cart).filter(itemCount => itemCount > 0).length;
    useEffect(() => {
        if (location.pathname !== '/CheckOut') {
          setChecked({});
        }
      }, [location.pathname, setChecked]);
  return (
    <div className='Carts'>
        <div className="CartItem">
                <h2 className="yourCart">Your Cart</h2> 
                {inCart == 0? <h1 style={{color:'white'}}>No item in Cart</h1>:""} 
            {Items.map((item) => {
                if(Cart[item.id] !== 0){
                    return <CartCard key = {item.id} data = {item}/>
                }      
            })}
            {total !== 0 ?(
              <div className='CheckOut'>
                <h3>{total}</h3>
                <Link to={"/CheckOut"}><button>Check Out</button></Link>
              </div>):
              ( <h3></h3>)
            }           
        </div> 
    </div>
  )
}

export default Cart
