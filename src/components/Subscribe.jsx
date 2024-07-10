import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Subscribe = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const { user, logOut } = UserAuth()

  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await logOut()
      navigate('/')
      console.log('You are logged out')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full px-4 pt-20 pb-6 bg-[var(--primary-gold)] text-center">
      <h1 className="text-[var(--primary-blue)]">
        Join our Kemet's Community!
      </h1>
      <div className="p-8">
        {user ? (
          <Link>
            <button onClick={handleSignOut} className="mb-4 mt-2 py-3 px-16">
              Log Out
            </button>
          </Link>
        ) : (
          <Link to="/signin">
            <button className="mb-4 mt-2 py-3 px-16">Sign In</button>
          </Link>
        )}
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
