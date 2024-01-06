import React, { useState } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }

  return (
    <div className='flex flex-row justify-between bg-blue-700 w-full px-6 py-3 text-white font-semibold'>

        <div className='flex w-1/2'>
            <h2 className='navbar-hdr'>
                <Link to='/'>
                PIZZERIA APP
                </Link>
            </h2>
        </div>

        <ul className='sm:flex flex-row gap-8 justify-end items-center w-2/5 hidden'>
            <li className='navbar-ul-item'>
                <Link to='/create-order'>Create order</Link>
            </li>
            <li className='navbar-ul-item'>
                <Link to='/orders'>View orders</Link>
            </li>
        </ul>


        <div className='sm:hidden flex items-center justify-end w-1/3'>
            <FontAwesomeIcon icon={faBars} className='text-xl' onClick={toggleMenu} />
            {showMenu && (
            <div className='sm:hidden flex flex-column fixed right-5 top-11 bg-white opacity-90 z-50 text-black border border-gray-300 rounded p-4'>
              <ul className='flex flex-col'>
                <li className='navbar-ul-item'>
                    <Link onClick={toggleMenu} to="/create-order">Create order</Link>
                </li>
                <li className='navbar-ul-item'>
                    <Link onClick={toggleMenu} to="/orders">View orders</Link>
                </li>
              </ul>
            </div>
             )}
        </div>
    </div>
  )
}

export default Navbar