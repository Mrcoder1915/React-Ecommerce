import React , {useContext, useState} from 'react'
import './shop.css'
import  {Items,Sellers}  from '../../ProductDb'
import Products from './Items'
// import Searchitem from '../Searchitem/SearchItem'
// import { shopContext } from '../shopcontext'

// const shopnameAppendToItem = Items.map(item => {
//   const seller = Sellers.find(seller => seller.Sid === item.Sid);
//   return {
//     ...item,
//     shopName: seller ? seller.shopName : 'Unknown Seller'
//   };
// });

const Shop = () => {
  // const {searchTerm,searchTriger,filterItemsBySearch} = useContext(shopContext)
  // const fil = filterItemsBySearch()
  

  // const  itemSearch = shopnameAppendToItem.filter((item) => 
  // item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  // item.shopName.toLowerCase().includes(searchTerm.toLowerCase()) 
  // );


  


  return (
    <div className='Shop'>
        <div className="products">
          
                            {/* shop-homepage
                            {searchTriger ? (
          fil.length > 0 ? (
            fil.map((item) => (
              <Searchitem key={item.id} data={item} />
            ))
          ) : (
            <div>No results found</div>
          )
        ) : ( */}
         { Items.map((product) => (
            <Products key={product.id} data={product} />
         ))}
        </div>
    </div>
  )
}

export default Shop
