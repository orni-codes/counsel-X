import React from 'react'
import { useState } from 'react'
import assets from '../assets/assets'
import { Link } from "react-router-dom"

const Navbar = () => {
    const[sidebarOpen,setSidebarOpen]=useState(false)

  return (
    <div className='flex justify-between items-center px-4 sm:px-6 lg:px-12 xl:px-36 py-4 fixed top-0 left-0 right-0 z-20 backdrop-blur-xl font-medium bg-black/30'>
      <div className="flex items-center shrink-0">
        <a href="#home" className="flex items-center">
        <img
          src={assets.logo}
          alt="logo"
          className="h-8 lg:h-10"
        />
        </a>
      </div>

      <div className={`text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:item-ceter gap-8 transition-all`}>

        <img src={assets.close_icon} alt='' className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)}/>
        <a onClick={()=> setSidebarOpen(false)}href="#" className='sm:hover:border-b'>Home</a>
        <a onClick={()=> setSidebarOpen(false)}href="#services" className='sm:hover:border-b'>Services</a>
        <a onClick={()=> setSidebarOpen(false)}href="#resources" className='sm:hover:border-b'>Resources</a>
         <a onClick={()=> setSidebarOpen(false)}href="#contact" className='sm:hover:border-b'>Contact</a>
        <div className="flex flex-col gap-4 mt-6 sm:hidden pr-10">
          <Link onClick={() => setSidebarOpen(false)} to="/login" className="border border-white py-2 px-4 rounded-full text-center hover:bg-white hover:text-primary transition-colors">
            Sign In
          </Link>
          <Link onClick={() => setSidebarOpen(false)} to="/signup" className="bg-white text-primary py-2 px-4 rounded-full text-center hover:bg-cyan-700 hover:text-white transition-colors font-bold">
            Sign Up
          </Link>
        </div>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>

        <img src={assets.menu_icon} onClick={()=> setSidebarOpen(true)} className='w-8 sm:hidden' />

        <Link
        to="/login" href="#signin" className='text-xl max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
          
          Sign In <img src={assets.arrow_icon} width={16} alt=''/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
