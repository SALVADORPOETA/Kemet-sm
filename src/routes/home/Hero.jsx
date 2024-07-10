import React from 'react'
import ImageSlider from './ImageSlider'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Hero = () => {
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
    <div className="w-full h-screen flex justify-center items-center relative">
      <ImageSlider />
      <div className="absolute z-2 w-[70%] h-[60%] md:w-[50%] md:h-[50%] flex flex-col justify-center items-center bg-black/70 rounded-xl text-[var(--primary-blue)] px-4 text-center mt-[100px]">
        <h1>
          Ancient <span className="text-[var(--primary-beige)]">Egypt:</span>
        </h1>
        <h1 className="py-2">
          <span className="text-[var(--primary-beige)]">Kemet,</span> the black
          land
        </h1>
        <p className="text-2xl font-bold py-4 text-[var(--primary-blue)]">
          For The Children of Ra
        </p>
        <div>
          {user ? (
            <button onClick={handleSignOut} className="py-3 px-7 mt-4">
              Log Out
            </button>
          ) : (
            <Link to="/signin">
              <button className="py-3 px-7 mt-4">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
