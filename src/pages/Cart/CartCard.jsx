import React, { useContext } from 'react'
import { shopContext } from '../shopcontext';
const CartCard = (props) => {
    const {id , productName, price, productImage} = props.data;
    const {Cart,addingQuantity, subtractQuantity, updateQuantity, toggleIsCheck} = useContext(shopContext)
   //  const [isCheck, setIsCheck] = useState(false)

   //  const toggleIsCheck = () => {
   //    setIsCheck(!isCheck)
   //    togglecheckItem(id,!isCheck)
   //  }
   
  return (
    <div className='cardContainer'>
       <div className="imgcontainer">
          <img src={productImage} alt="" />
       </div>
       <div className="Des">
          <h2>{productName}</h2>
          <h3>{price}</h3>
          
          <div className="changeValue">
              <button onClick={() => subtractQuantity(id)}>-</button>
              <input value={Cart[id]} onChange={(e) => updateQuantity(e.target.value, id)}/>
              <button onClick={() => addingQuantity(id)}>+</button>
          </div>
       </div>
      <div className="cartCheckBox">
      <input 
          type="checkbox" 
          onChange={() => toggleIsCheck(id)} 
        />
      </div>
    </div>
  )
}

export default CartCard
