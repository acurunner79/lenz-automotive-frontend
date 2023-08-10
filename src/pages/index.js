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
        <h1 className="homepage-header">Profession Vehicle Maintenance and Repairs</h1>
      </main>
    </Layout>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
