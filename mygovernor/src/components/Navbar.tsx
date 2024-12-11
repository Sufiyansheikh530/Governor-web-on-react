"use client"
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-800 h-14  flex py-2 items-center space-x-9 m-0 '>
        <img
        src='logo.png'
        alt='logo'
        className=' w-20 h-21 mt-14 '
        />
        <h1 className=' font-extrabold cdcd text-blue-300  m-auto ' >Tuition Free Education Program on Latest Technologies </h1>
        <div>
          <ul className='flex text-white  space-x-0 sm:space-x-20  ' >
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">Apply</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">Results</a></li>
            <li><a href="">Career</a></li>
          </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
