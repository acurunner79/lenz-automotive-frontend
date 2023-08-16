import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import years from '../json/years.json'
import { useForm, ValidationError } from '@formspree/react'
import '../styles/contact.css'

// console.log('This is years ', years)

const Contact = () => {

  const [state, handleSubmit] = useForm("mleyjvda")

  if(state.succeeded){
    return( 
      <Layout>
        <h3 className='submit-message'>Thank you!<br/> Your request has been submitted.</h3><br/>
        <h2>Return to
          <Link to='/'> Home Page</Link>
        </h2>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>Contact Page</h1>
      <div className='form-container'>
        <form className='form-card' onSubmit={handleSubmit}>
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <h2 className='form-input-header'>Please enter vehicle information</h2>
          <label className='form-label'>Year
            <select className='form-select' 
              type='text'
              name='Year'>
              {years.map(year => {
                return(
                  <option 
                    key={year.id}>{year.year}
                  </option>
                )
              })}
            </select>
          </label>
          <br/>
          <label className='form-label'>Make
            <input className='form-input'
              type='text'
              name='Make'
              placeholder='Enter Make'
            />
          </label>
          <br/>
          <label className='form-label'>Model
            <input className='form-input'
              type='text'
              name='Model'
              placeholder='Enter Model' 
            />
          </label>
          <br/>
          <h2 className='form-input-header'>Enter your information and a brief description of your vehicle's issue(s)</h2>
          <label className='form-label'>First Name
            <input className='form-input'
              type='name'
              name='First name'
              placeholder='Enter First Name'/>
          </label>
          <br/>
          <label className='form-label'>Last Name
            <input className='form-input'
              type='name'
              name='Last name'
              placeholder='Enter Last Name'/>
          </label>
          <br/>
          <label className='form-label'>Phone
            <input className='form-input'
              type='text'
              name='Phone'
              placeholder='Enter Phone Number'/>
          </label>
          <br/>
          <label className='form-label'>Email
            <input className='form-input'
              type='email'
              name='Email'
              placeholder='Enter Email Address'/>
          </label>
          <br/>
          <label className='form-label'>Description<br/>
            <textarea className='form-textarea'
              name='Description'
              placeholder='Enter Brief Description'/>
          </label>
          <br/>
          <button className= 'form-button' 
            type='submit' 
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
