import React from 'react'
import { Link } from 'react-router-dom'

const notFound = () => {
  return (
    <div className='notFound'>
        <h1>Url Not Found <Link to={"/"}>Back to shop</Link></h1>
    </div>
  )
}

export default notFound
