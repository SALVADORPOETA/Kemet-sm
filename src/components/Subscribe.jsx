import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Subscribe = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full px-4 py-16 bg-[var(--primary-gold)] text-center">
      <h1 className="text-[var(--primary-blue)]">
        Join our Kemet's Community!
      </h1>
      <div className="p-8">
        <>
          <Link>
            <button className="mb-4 mt-2 py-3 px-16">Sign In</button>
          </Link>
          <div className="flex items-center justify-center p-2">
            <input id="check1" className="mr-2" type="checkbox" />
            <p className="text-[var(--primary-grey)] text-lg">
              Yes, I agree to receive email communications from KEMET.
            </p>
          </div>
        </>
      </div>
      <div className="flex justify-center py-12">
        <div
          className="rounded-full shadow-xl cursor-pointer hover:scale-110 ease-in duration-300"
          onClick={scrollToTop}
        >
          <BsFillArrowUpCircleFill className="text-6xl md:text-7xl text-[var(--primary-blue)]" />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
