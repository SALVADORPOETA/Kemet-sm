import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Subscribe = () => {
    
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div className='w-full px-4 py-16 bg-[var(--primary-gold)] text-center'>
      <h1>Welcome to our Kemet's Community!</h1>
      <div className='p-8'>
        <>
          <div className='flex items-center justify-center p-2'>
            <input className='mr-2' type='checkbox' />
            <p>Yes, I agree to receive email communications from KEMET.</p>
          </div>
        </>
      </div>
      <div className='flex justify-center py-12'>
        <div className='rounded-full shadow-xl cursor-pointer hover:scale-110 ease-in duration-300' onClick={scrollToTop}>
          <BsFillArrowUpCircleFill className='text-6xl md:text-7xl' />
        </div>
      </div>
    </div>
  )
}

export default Subscribe