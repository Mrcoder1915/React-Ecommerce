import React, { useContext, useState } from 'react'
import { Items } from '../../ProductDb';
import { useParams } from 'react-router-dom';
import './SelectedItem.css'
import { shopContext } from '../shopcontext';
import RelatedItem from './relatedItem';
import SellerInfo from './sellerInfo';
import ItemDescription from './itemDescription';
import { Sellers } from '../../ProductDb';
import Ratings from './Ratings'
import { FaCartArrowDown } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import Footer from '../../shared/components/Partials/Footer/Footer';

const SelectedItem = () => {
    const {id} = useParams()
    const Item = Items.find(product => product.id === parseInt(id))
    const Seller = Sellers.find(seller => seller.Sid === Item.Sid)
    const {addToCart} = useContext(shopContext)
    const [buttonClick, setbuttonClick] = useState(false)

    const relatedItems = Items.filter((related) => {
       return related.category === Item.category && related.id !== parseInt(id)
    })
    function cartClick() {
      setbuttonClick(true)
    }
  return (
    // selected Item
    <div className='SelectedItem'>
        <div className='Container'>
          <div className="productContainer">
            <div className='imgMain'>
              <div className="imgContainer">
                <img src={Item.productImage} alt= {Item.productName} />
              </div>
            </div>
            <div className="Description">
                <div className="productaName">
                    <h2>{Item.productName}</h2>
                    <div className='addBtn' >
                    <button className={`cart-button ${buttonClick? 'clicked' : ''}`} onClick={() => {addToCart(Item.id);cartClick()}}>
                        <span className="add-to-cart">Add to cart</span>
                        <span className="added">Added</span>
                        <i className="fa-shopping-cart"><FaCartArrowDown/></i>
                        <i className="fa-box"><FaBoxOpen/></i>
                    </button>
                        {/* <button onClick={() => {addToCart(Item.id);cartClick()}} className='addtocart'>Add cart</button> */}
                    </div>
                </div>
                {/* <div className="selectedItemDes">
                  <p>{Seller.shopName}</p>
                </div> */}
            </div>
          </div>
          {/*  Sellerinfo  */}
          <SellerInfo data = {Seller}/>
          {/* item description */}
          <ItemDescription data = {Item}/>
          <Ratings data = {Item}/>
          {/* related Item base on the item that selected */}
          {relatedItems.length > 0 &&
            <div className="relatedItem">
                <div className="mainContainer">
                  {relatedItems.map((relateditem) => (
                    <RelatedItem key={relateditem.id} data = {relateditem}/>
                  ))}
              </div>
          </div> 
          }       
             
        </div>
        <Footer/>  
    </div>
  )
}

export default SelectedItem
