import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const handleNavClick = () => {
    setNav(false)
  }

  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 70) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  const location = useLocation()
  const isActive = path => location.pathname === path

  return (
    <div className={shadow ? 'shadow-xl fixed top-0 left-0 z-50 w-full h-[70px] bg-[var(--primary-gold)] lg:bg-[var(--transparent-gold)]' : 'fixed top-0 left-0 z-50 w-full h-[70px] bg-[var(--primary-gold)]'}>
      <div className='max-w-[1240px] h-full mx-auto px-4 flex justify-between items-center'>
        <h1 className='text-[var(--primary-blue)] font-bold'><Link to='/' onClick={handleNavClick}>Kenet</Link></h1>
        <div className='hidden md:flex'>
          <ul className='flex items-center text-[var(--primary-blue)]'>
            <li><Link className={`hover:border-b-4 hover:border-[var(--primary-blue)] font-bold text-xl ${isActive('/') ? 'border-b-4 border-[var(--primary-blue)]' : ''}`} to='/'>Home</Link></li>
            <li><Link className={`hover:border-b-4 hover:border-[var(--primary-blue)] font-bold text-xl ${isActive('/egypt') ? 'border-b-4 border-[var(--primary-blue)]' : ''}`} to='/egypt'>Egypt</Link></li>
            <li><Link className={`hover:border-b-4 hover:border-[var(--primary-blue)] font-bold text-xl ${isActive('/products') ? 'border-b-4 border-[var(--primary-blue)]' : ''}`} to='/products'>Products</Link></li>
            <li><Link className={`hover:border-b-4 hover:border-[var(--primary-blue)] font-bold text-xl ${isActive('/contact') ? 'border-b-4 border-[var(--primary-blue)]' : ''}`} to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} className='text-[var(--primary-blue)]' /> : <AiOutlineMenu size={30} className='text-[var(--primary-blue)]' />}
        </div>
        <div className={nav ? 'w-full h-screen lg:h-[0] bg-[var(--primary-gold)] text-[var(--primary-blue)] absolute top-[70px] left-0 flex justify-center text-center ease-in-out duration-500 z-20' : 'absolute left-[-100%]'}>
          <ul className='flex flex-col text-[var(--primary-blue)] items-center mt-[50px]'>
            <li><Link className={`hover:border-b-4 hover:border-[var(--primary-blue)] font-bold text-xl ${isActive('/') ? 'border-b-4 border-[var(--primary-blue)] inline-block p-1 text-2xl' : 'inline-block p-1 text-2xl'}`} to='/'>Home</Link></li>
            <li><Link className={`hover:border-b-4 hover:border-[var(--primary-blue)] font-bold text-xl ${isActive('/egypt') ? 'border-b-4 border-[var(--primary-blue)] inline-block p-1 text-2xl' : 'inline-block p-1 text-2xl'}`} to='/egypt'>Egypt</Link></li>
            <li><Link className={`hover:border-b-4 hover:border-[var(--primary-blue)] font-bold text-xl ${isActive('/products') ? 'border-b-4 border-[var(--primary-blue)] inline-block p-1 text-2xl' : 'inline-block p-1 text-2xl'}`} to='/products'>Products</Link></li>
            <li><Link className={`hover:border-b-4 hover:border-[var(--primary-blue)] font-bold text-xl ${isActive('/contact') ? 'border-b-4 border-[var(--primary-blue)] inline-block p-1 text-2xl' : 'inline-block p-1 text-2xl'}`} to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar