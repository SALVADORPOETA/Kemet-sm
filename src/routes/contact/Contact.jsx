import React from 'react'
import Navbar from '../../components/Navbar'
import Subscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="bg-[var(--primary-beige)] mt-[90px] w-full h-screen top-[90px">
      <Navbar />
      <ContactForm />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Contact
