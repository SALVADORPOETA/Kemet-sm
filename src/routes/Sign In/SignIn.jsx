import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../../context/AuthContext.js'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineMailOutline } from 'react-icons/md'

const SignIn = () => {
  const { googleSignIn, user } = UserAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user != null) {
      navigate('/account')
    }
  }, [user, navigate])

  return (
    <div className="bg-[var(--primary-beige)]">
      <Navbar />
      <div className="h-screen mt-[90px]">
        <h1 className="text-center text-3xl font-bold pt-16 pb-8 text-[var(--primary-blue)]">
          Sign In
        </h1>
        <div className="max-w-[240px] m-auto py-4">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
        <h1 className="text-center text-3xl font-bold py-8 text-[var(--primary-blue)]">
          Or
        </h1>
        <div className="text-center">
          <Link to="/signinemail">
            <button className="text-xl py-3 px-7 mx-auto">
              <MdOutlineMailOutline className="mr-4 inline-block text-2xl" />
              Sign In with your Email
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn
