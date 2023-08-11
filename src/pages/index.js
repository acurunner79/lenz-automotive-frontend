import * as React from "react"
import Layout from "../components/Layout/Layout"

import '../styles/home.css'


const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div className="subnav">
          <p className="subnav-phone">(779) 227-2127</p>
        </div>
        <h1 className="homepage-header">Professional Vehicle Maintenance and Repairs</h1>
        {/* <img className='hero-image' src='https://res.cloudinary.com/acurunner79/image/upload/v1691710481/FullLogo_Transparent_NoBuffer_1_kkig9r.png' alt="main-logo"/> */}
      </main>
    </Layout>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
