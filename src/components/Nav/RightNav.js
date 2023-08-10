import React from 'react'
import { Link } from 'gatsby'
import '../../styles/rightnav.css'

const RightNav = () => {
  return (
    <nav id='right-nav'>
        <ul>
            <Link to='/'>
                <li id='right-nav-link'>Home</li>
            </Link>
            <Link to='/contact'>
                <li id='right-nav-link'>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}

export default RightNav
