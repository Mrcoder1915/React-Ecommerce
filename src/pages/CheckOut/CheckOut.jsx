import "./CheckOut.css"
import { useContext, useEffect, useState } from "react"
import { shopContext } from '../shopcontext';
import { Items } from "../../ProductDb";
import CheckOutItems from "./CheckOutItems"
import { BeatLoader } from "react-spinners";
const CheckOut = () => {
  const {cheked,  totalCartItem, Cart} = useContext(shopContext)
  const checkedItem = Items.filter(item => cheked[item.id])
  const [loading,setLoading] = useState(false)
  const Total = totalCartItem()
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState("Cash On Delivery");

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        setShowPaymentMethods(true);
      }, 3000);
      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [loading]);

  const toggle = () => {
    setLoading(true);
    setShowPaymentMethods(false); 
  };

  const paymentChange = (Type) => {
    setSelectedPaymentMethods(Type);
    setShowPaymentMethods(false)
  }
  return (
    <div className="checkOutContainer">
      <div className="checkOutItem">
        {checkedItem.map((item) => {
        if(Cart[item.id] !== 0){
          return <CheckOutItems key={item.id} item={item} />
        }
    })}
      </div>
      <div className="paymentContainer">
         <div className="Payment">
            <div className="buyerInfo">
               <h1>Buyer name</h1>
               <h1>09xxxxxxxxx</h1>
               <h3>buyers Address</h3>
            </div>
            <div className="shippingOption">
              <div className="shipping">
                  <label htmlFor="shippingOpt">Shipping option:</label>
                 <select id="shippingOpt">  
                    <option value="local">Local</option>
                    <option value="standard">Standard</option>
                 </select>
                 <h3>Php: 50</h3>
              </div>
            </div>
            <div className="paymentOption">
              <div className="paymentOpt">
                <label htmlFor="payment">Payment Option:</label>
                <h3 id="payment">{selectedPaymentMethods}</h3>
                <button className="paymentChange" onClick={toggle}>Change</button>
              </div>
            </div>
            {loading?
            <div className="loadingContainer">
              <BeatLoader color="white" size={40}/>
            </div>:
            showPaymentMethods &&
            <div className="paymentMethod">
                 <h1 onClick={() => paymentChange("Cash On Delivery")}>Cash On Delivery</h1>
                 <h1 onClick={() => paymentChange("GCash")}>Gcash</h1>
                 <h1 onClick={() => paymentChange("Maya")}>Maya</h1>
                 <h1 onClick={() => paymentChange("Paypal")}>Paypal</h1>
            </div>
            }
            {
              Total > 0 ?
              <div className="Confirm">
                <h2>php: {Total}</h2>
                <button>Confirm Orders</button>                   
              </div>:
                <h2></h2>  
            }
         </div>
      </div> 
    </div>
  )
}

export default CheckOut
