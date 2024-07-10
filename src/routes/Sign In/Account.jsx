import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Account = () => {
  const { logOut, user } = UserAuth()

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
    <div className="w-full m-auto bg-[var(--primary-beige)]">
      <Navbar />
      <div className="h-screen mt-[90px] text-[var(--primary-blue)]">
        <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
        {user?.displayName ? (
          <div className="text-center text-3xl font-bold py-4">
            <p>Welcome, {user.displayName}</p>
            <div className="flex items-center justify-center p-12">
              <img
                src={user.photoURL}
                alt="User Profile"
                className="h-[200px] rounded-full"
              />
            </div>
          </div>
        ) : (
          <div className="text-center font-bold text-3xl py-4">
            <p>Welcome, {user && user.email}</p>
          </div>
        )}
        <button
          onClick={handleSignOut}
          className="py-3 px-7 mt-10 mx-auto block"
        >
          Log Out
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Account
