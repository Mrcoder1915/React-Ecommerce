import React, { useState } from 'react'
import './Ratings.css'

const Ratings = (props) => {
    const [showmore,setshomore] = useState(false)
    const {rating} = props.data
 
    const toggle = () => {
      setshomore(!showmore)
    }
    
  return (
    <div className="Rating">
      <div className={`rating-main ${showmore? 'showmore': ''}`} >
      <h1 className='titleHeader'>Ratings</h1>
       {rating.map((ratings) => (
        <div className='Rating-Container'>          
           <div className='profile-image'>
              <img src="" alt="profile" />
              <h1> {ratings.commenter}</h1>
           </div>
            <p style={{color:'white'}}> {ratings.comment}</p>
        </div>
       ))}      
       </div>
       {
         rating.length > 3 ?  <div className="showbutton-container">
                <button onClick={toggle}>{showmore? 'Showless': 'Showmore'}</button>
            </div>:""
       }
    </div>
  )
}

export default Ratings
