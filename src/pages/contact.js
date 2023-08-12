import React from 'react'
import Layout from '../components/Layout/Layout'
import years from '../json/years.json'

console.log('This is years ', years)

const contact = () => {

  return (
    <Layout>
      <h1>Contact Page</h1>
      <div className='form-container'>
        <form className='form-card'>
          <h2>Please enter vehicle information</h2>
          <label className='form-label'>Year
            <select className='form-select' >
              {years.map(year => {
                return(
                  <option key={year.id}>{year.year}</option>
                )
              })}
            </select>
          </label>
          <br/>
          <label className='form-label'>Make
            <input className='form-input'
              placeholder='Enter Make'
            />
          </label>
          <br/>
          <label className='form-label'>Model
            <input className='form-input'
              placeholder='Enter Model' 
            />
          </label>
          <br/>
          <h2>Please enter your information and a brief description of your vehicle's issue(s)</h2>
          <label>First Name
            <input />
          </label>
          <br/>
          <label>Last Name
            <input />
          </label>
          <br/>
          <label>Phone
            <input />
          </label>
          <br/>
          <label>Email
            <input />
          </label>
          <br/>
          <label>Description
            <textarea/>
          </label>
          <br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default contact
