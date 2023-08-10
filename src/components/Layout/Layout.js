import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Hamburger from '../Nav/Hamburger'
import Nav from '../Nav/Nav'

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
    padding-top: 50px
}

h1, h2, h3, h4, h5, h6, p{
    color: rgb(31, 54, 95);
}
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Hamburger />
      <Nav />
      <section>{children}</section>
    </div>
  )
}

export default Layout
