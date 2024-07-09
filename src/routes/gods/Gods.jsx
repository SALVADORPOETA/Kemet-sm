import React from 'react'
import Navbar from '../../components/Navbar'
import Subscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'
import GodsContainer from './GodsContainer'

const Gods = () => {
  return (
    <div className="bg-[var(--primary-beige)] mt-[90px] w-full h-screen top-[90px">
      <Navbar />
      <GodsContainer />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Gods
