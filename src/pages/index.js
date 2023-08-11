import * as React from "react"
import Layout from "../components/Layout/Layout"
import { FaPhone } from '@react-icons/all-files/fa/FaPhone'
import '../styles/home.css'


const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div className="subnav">
          <p className="subnav-phone">
            <FaPhone size='12' className="phone-icon"/>(779) 227-2127 
          </p> 
        </div>
        <h1 className="homepage-header">Professional Vehicle Maintenance and Repairs</h1>
        <div className="upper-card-container">
          <div>
              <img src="https://res.cloudinary.com/acurunner79/image/upload/v1691773026/the-telltale-signs-its-time-for-an-oil-change_r6eto8.jpg" className="oil-change-image"/>
            <h2 className="oil-change-span">
              <span >Oil Change and Maintenance </span>
            </h2>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
