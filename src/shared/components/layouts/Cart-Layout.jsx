import React from 'react'
import Header from '../Partials/header/Header'
import { Outlet } from 'react-router-dom'
const CartLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default CartLayout
