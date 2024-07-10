import React from 'react'
import Navbar from '../../components/Navbar'
import Subscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'
import GodsCards from './GodsCards'

const Gods = () => {
  return (
    <div className="bg-[var(--primary-beige)] mt-[90px] w-full h-screen top-[90px">
      <Navbar />
      <GodsCards />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Gods
