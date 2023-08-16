import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import { FaPhone } from '@react-icons/all-files/fa/FaPhone'
import Hamburger from '../Nav/Hamburger'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    // background: rgb(2, 15, 79)
}

a{
    text-decoration: none;
}

li{
    text-decoration: none;
    list-style: none;
    font-weight: 500;
}

h1{
  margin: 20px auto;
  font-size: 30px
}

h1, h2, h3, h4, h5, h6, p{
    color: rgb(31, 54, 95);
}

select, input, label{
  color: rgb(31, 54, 95);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700
}

.subnav{
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 5vh;
  background-color: rgb(31, 54, 95);
  /* margin-top: 80px; */
}

.subnav-area{
  color: white;
  font-weight: 550;
  padding: 14px 0 0 14px;
}

.subnav-phone{
  color: white;
  font-weight: 700;
  padding-top: 10px;
  padding-right: 10px;
  text-align: right;
}
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Hamburger />
      <Link to='/'>
        <img className='hero-image' src='https://res.cloudinary.com/acurunner79/image/upload/v1691771668/FullLogo_Transparent_NoBuffer_2_jahwfm.png' alt="main-logo"/>
      </Link>
      <Nav />
      <div className="subnav">
          <p className="subnav-area">
            Chicagoland Area
          </p>
          <p className="subnav-phone">
            <FaPhone size='18' className="phone-icon"/>
            (779) 227-2127 
          </p> 
        </div>
      <section>{children}</section>
      <Footer />
    </div>
  )
}

export default Layout
