import * as React from "react"
import Layout from "../components/Layout/Layout"
import {FaArrowRight} from '@react-icons/all-files/fa/FaArrowRight'
import '../styles/home.css'


const IndexPage = () => {
  return (
    <Layout>
      <main>
        
        <img className="homepage-logo"
          src="https://res.cloudinary.com/acurunner79/image/upload/v1691786351/FullLogo_Transparent_NoBuffer_4_jck1al.png" 
          alt="main-logo"
        />
        <h1 className="homepage-header">
          <i>
            "Professional Vehicle Maintenance and Repairs with Over 25 Years of Experience"
          </i>
        </h1>
        <div className="upper-card-container">
          <div className="services-card">
            <img className="oil-change-image"
              src="https://res.cloudinary.com/acurunner79/image/upload/v1691773026/the-telltale-signs-its-time-for-an-oil-change_r6eto8.jpg"  
              alt="oil change light"
            />
            <h2 className="oil-change-span">
              <span >Oil Change and Maintenance <FaArrowRight size='18' className="phone-icon"/></span>
            </h2>
          </div>
          <div className="services-card">
            <img src="https://res.cloudinary.com/acurunner79/image/upload/v1691784582/ac_jgs1kk.jpg" className="oil-change-image" alt="ac service on vehicle"/>
            <h2 className="oil-change-span">
              <span >A/C Service <FaArrowRight size='18' className="phone-icon"/></span>
            </h2>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
