import React, { useContext } from 'react'
import { shopContext } from '../shopcontext'
import SearchItem from './SearchItem'
import '../Shop/shop.css'
const Search = () => {
    const {filterItemsBySearch} = useContext(shopContext)
    const fil = filterItemsBySearch()
    console.log(fil)
  return (
    <div className='Shop'>
        <div className="products">    
           { fil.map((search) => (
              <SearchItem key={search.id} data={search} />
            ))}   
        </div>
    </div>
  )
}

export default Search
