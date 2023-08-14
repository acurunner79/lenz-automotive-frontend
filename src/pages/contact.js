import React from 'react'
import Layout from '../components/Layout/Layout'
import years from '../json/years.json'
import '../styles/contact.css'

console.log('This is years ', years)

const contact = () => {

  return (
    <Layout>
      <h1>Contact Page</h1>
      <div className='form-container'>
        <form className='form-card'>
          <h2 className='form-input-header'>Please enter vehicle information</h2>
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
          <h2 className='form-input-header'>Enter your information and a brief description of your vehicle's issue(s)</h2>
          <label className='form-label'>First Name
            <input className='form-input'/>
          </label>
          <br/>
          <label className='form-label'>Last Name
            <input className='form-input'/>
          </label>
          <br/>
          <label className='form-label'>Phone
            <input className='form-input'/>
          </label>
          <br/>
          <label className='form-label'>Email
            <input className='form-input'/>
          </label>
          <br/>
          <label className='form-label'>Description<br/>
            <textarea className='form-textarea'/>
          </label>
          <br/>
          <button className= 'form-button' type='submit'>Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default contact
