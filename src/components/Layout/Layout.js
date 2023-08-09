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
}

a{
    text-decoration: none;
}

li{
    text-decoration: none;
    list-style: none;
    color: black;
}

h1{
    padding-top: 100px
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
