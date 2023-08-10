import React from 'react'
import '../../styles/nav.css'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-link-container'>
            <Link to='/'>
                <li id='navbar-link'>Home</li>
            </Link>
            <Link to='/contact'>
                <li id='navbar-link'>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav
