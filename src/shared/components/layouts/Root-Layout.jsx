import React from 'react'
import Header from '../Partials/header/Header'
import Footer from '../Partials/Footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Header/>
        <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
