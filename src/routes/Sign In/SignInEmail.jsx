import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const SignInEmail = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signIn } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password, error)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  return (
    <>
      <Navbar />
      <div className="mt-[90px] h-screen bg-[var(--primary-beige)] text-[var(--primary-blue)]">
        <div className=" max-w-[700px] mx-auto my-16 p-4">
          <div>
            <h1 className="text-center py-4 text-3xl md:text-4xl">
              Sign In to <span className="text-[var(--primary-red)]">Your</span>{' '}
              account
            </h1>
            <p className="text-center py-2 text-xl md:text-2xl font-bold">
              Don't you have an account yet?{' '}
              <Link
                to="/signupemail"
                className="border-b-4 border-b-[var(--primary-teal)]"
              >
                Sign Up!
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="py-4">
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[var(--primary-blue)] bg-[var(--primary-teal)] rounded-3xl shadow-lg p-3 w-full my-4 focus:outline-none text-[var(--primary-yellow)]"
                type="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="border border-[var(--primary-blue)] bg-[var(--primary-teal)] rounded-3xl shadow-lg p-3 w-full my-4 focus:outline-none text-[var(--primary-yellow)]"
                type="password"
              />
            </div>
            {error && (
              <p className="text-center py-2 text-xl md:text-2xl">
                The Email or the Password is not valid. Please try again.
              </p>
            )}
            <button className="py-3 px-7 w-full my-4 hover:scale-105">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignInEmail
