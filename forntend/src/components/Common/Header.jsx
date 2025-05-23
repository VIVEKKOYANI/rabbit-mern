import React from 'react'
import { Topbar } from '../Layout/Topbar'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='border-b border-gray-500'>
      {/* Topbar */}
      <Topbar />
      {/* navbar */}
      <Navbar />
      {/* Cart Drawer */}
    </header>
  )
}
