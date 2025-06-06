import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderSectionCollections from '../components/Products/GenderSectionCollections'
import NewArrivals from '../components/Products/NewArrivals'

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderSectionCollections />
      <NewArrivals />
    </div>
  )
}

export default Home