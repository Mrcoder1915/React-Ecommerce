import React, { useState } from 'react'

const itemDescription = (props) => {
    const {description} = props.data
    const [showmore , setshowmore] = useState(false)

    const toggle = () => {
      setshowmore(!showmore)
    }
  return (
    <div className={`itemDescriptionContainer`}>
      <div className={`itemDescriptions ${showmore ? 'showmore' : ''}`}>
        <h2>Product Description</h2>
        <h3>{description}</h3>
      </div>
      <div className="btnShow">
        <button onClick={toggle}>
          {showmore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  )
}

export default itemDescription
