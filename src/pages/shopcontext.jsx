import React, { createContext, useState } from 'react'
import { Items } from '../ProductDb';
import { useNavigate } from 'react-router-dom';

export const shopContext = createContext(null)

const defaultCart = () => {
    let carts = {}
    for(let i = 1; i <= Items.length;i++){
        carts[i] = 0
    }
    return carts
}

const ShopContextProvider = ({children}) => {
    const [Cart, setCart] = useState(defaultCart);
    const [cheked, setChecked] = useState({})
    const [searchItem, setsearchItem] = useState('')
    const [searchTriger, setsearchTriger] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()
    const addToCart = (itemId) => {
        setCart((prev)  => ({...prev, [itemId]: 1}))
    }
    const addingQuantity = (itemId) => {
        setCart((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + 1}))
    }
    const subtractQuantity = (itemId) => {
        setCart((prev) => ({...prev, [itemId]: (prev[itemId] || 0) - 1}))
    }
    const updateQuantity = (newValue,itemId) => {
        setCart((prev) => ({...prev, [itemId]: prev[itemId] = newValue}))
    }
    const toggleIsCheck = (ItemId) => {
        setChecked((prev) => ({ ...prev, [ItemId]: !prev[ItemId] }));
      };
    const totalCartItem = () => {
        let total = 0;
        for (const cartItemId in Cart) {
          if (Cart.hasOwnProperty(cartItemId) && Cart[cartItemId] > 0 && cheked[cartItemId]) {
            const item = Items.find((item) => item.id == cartItemId);
            if (item) {
              total += item.price * Cart[cartItemId];
            }
          }
        }
        return total;
      };
// for search function
      const searchhandleInputChange = (e) => {
        setsearchItem(e.target.value);
    
        // If the input is cleared, reset the searchTrigger to false to show all items
        if (e.target.value === '' && searchTriger) {
          setsearchTriger(false);
          setSearchTerm(searchTerm); 
        }
      };
      const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchItem !== "") {
          if (searchItem.trim() !== '') {
            // If the input is empty, reset search mode
            setsearchTriger(true);
            setSearchTerm(searchItem);
            navigate('/Search')                     
          }
        }
      };

      const filterItemsBySearch = () => {
        const result = Items.filter((Item) =>
        Item.productName.toLowerCase().includes(searchTerm.toLowerCase())
        
        )
        return result
      };
      

      

    const value = {Cart,
                   addToCart,
                   addingQuantity,
                   subtractQuantity,
                   updateQuantity,
                   totalCartItem,
                   toggleIsCheck,
                   setChecked,
                   cheked,
                   searchItem,
                   setsearchItem,
                   searchTriger,
                   searchTerm,
                   handleKeyPress,
                   searchhandleInputChange,
                   filterItemsBySearch
                   }
  return (
       <shopContext.Provider value={value}>
            {children}
       </shopContext.Provider>
  )
}

export default ShopContextProvider
