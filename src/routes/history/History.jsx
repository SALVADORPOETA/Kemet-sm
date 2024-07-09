import React from 'react'
import Navbar from '../../components/Navbar'
import Subscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'
import HistoryContainer from './HistoryContainer'

const History = () => {
  return (
    <div className="bg-[var(--primary-beige)] mt-[90px] w-full h-full top-[90px">
      <Navbar />
      <HistoryContainer />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default History
