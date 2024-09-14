import React, {useContext} from 'react'
import { shopContext } from '../shopcontext'

const CheckOutItems = (props) => {
    const item = props.item
    const {Cart} = useContext(shopContext)
  return (
    <div className="itemsContainer">
            <div className="checkoutImgContainer">
              <img src={item.productImage} alt="" />
            </div>
            <div className="itemDescription">
              <h2>{item.productName}</h2>
              <p>Php: {item.price}</p>
              <p>Quantity: x{Cart[item.id]}</p>
            </div>
            <div className="messageContainer">
               <p>Message Seller</p>
               <input type="text" placeholder='Message'/>
            </div>
    </div>       
  )
}

export default CheckOutItems
