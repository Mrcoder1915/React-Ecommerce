import React from 'react'
import { Link } from 'react-router-dom';

const relatedItem = (props) => {
    const {id,productName, price,productImage} = props.data;
    const scrolltotop = () => window.scrollTo({top: 0 , behavior: 'smooth'});
    const Price = price.toLocaleString('En-Us')
    
  return (
    <Link to=  {`/SelectedItem/${id}`} onClick = {scrolltotop}>
      <div  className='relatedItemContainer'>
          <div className="imgContainer">
                <img src={productImage} alt="" />
          </div>
          <div className='product-info'>
            <h2>{Price}</h2>
            <h2>{productName}</h2>
          </div>
      </div>
      </Link>

  )
}

export default relatedItem
