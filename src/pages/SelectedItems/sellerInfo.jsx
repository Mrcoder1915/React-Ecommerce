import React from 'react'

const sellerInfo = (props) => {
  const {shopName, rating} = props.data
  return (
      
      <div className="sellerInfoContainer">
        <div className="sellerInfo">
            <div className="profile-Name-container">    
              <div className='sellerProfile'>
                  {/* <img src="" alt="profile" /> */}
              </div>
             <div className="shopName">
                  <h2>{shopName}</h2>
                  <p>15mins ago</p>
              </div>
            </div>
              <div className="No-products">
                <h2>No.products: 2k</h2>
              </div>
              <div className="Ratings">
                <h2>Ratings: {rating}</h2>
              </div>
              <div className="Respones">
                <h2>Response rate: 90%</h2>
              </div>
        </div>
      </div>
  )
}

export default sellerInfo
