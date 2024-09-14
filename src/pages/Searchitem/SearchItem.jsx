import { Link } from 'react-router-dom';

const SearchItem = (props) => {
     const {id , productName, price, productImage} = props.data;
     const scrolltotop = () => window.scrollTo({top: 0 , behavior: 'smooth'});
  return (
    <Link to=  {`/SelectedItem/${id}${productName}`} onClick={scrolltotop}>
    <div className='itemsContainer'>
      <div className='Items'>
        <div className="productImg">
            <img src={productImage} alt="" loading='lazy'/>
        </div>
      </div>
      <div className="shopdes">
           <div className="name-price">
               <h2>{price}</h2>
               <h2> {productName}</h2>            
           </div>
      </div>
  </div>
    </Link>
  )
}

export default SearchItem