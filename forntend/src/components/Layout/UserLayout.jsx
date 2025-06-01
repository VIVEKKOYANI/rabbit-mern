import React from 'react'
import { Header } from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main content */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default UserLayout