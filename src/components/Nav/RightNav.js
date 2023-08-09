import React from 'react'
import { Link } from 'gatsby'
import '../../styles/rightnav.css'

const RightNav = () => {
  return (
    <nav id='right-nav'>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/contact'>
                <li>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}

export default RightNav
