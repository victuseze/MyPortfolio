import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-20 h-7 rounded-xl bg-white items-centre justify-center flex font-bold shadow-md'>
            <p className='blue-gradient_text'>Victus</p>
        </NavLink>
        <nav className='flex text-xl gap-7 font-medium'>
            <NavLink to='/' className={({ isActive }) => isActive? 'text-blue-500' : 'text-white' }>
                Home
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive? 'text-blue-500' : 'text-white' }>
                About
            </NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive? 'text-blue-500' : 'text-white' }>
                Projects
            </NavLink>
            <NavLink to='/contacts' className={({ isActive }) => isActive? 'text-blue-500' : 'text-white' }>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
