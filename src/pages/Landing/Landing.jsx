import styles from './Landing.module.css'
import { useState, useEffect, useRef } from 'react';

const Landing = ({ user, handleChangeSetLocation, userLocation }) => {
  const formElement = useRef()
  const [formData, setFormData] = useState({
    location: '',
  })
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    formElement.current.checkValidity() ?
      setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  const handleSubmit = async evt => {
    evt.preventDefault()
    await handleChangeSetLocation(formData)
  }

  return (
    <main className={styles.container}>
      <div className='landing-details'>
        <img className='landing-img' src="https://i.imgur.com/F6STzn1.png" alt="ba-tag" />
        <h1>Welcome to Brew Advisor</h1>
        <h2>BrewAdvisor is a site that facilitates social gatherings and fun with friends. Who doesn't love a brewery? Who doesn't love catching up with old friends? Users may search for local breweries and leave reviews of your previous visits. You can check out that local spot on Yelp. Registered users are allowed to create and respond to events and get togethers!</h2>
      </div>
      <form className='d-flex' autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
        <div className='container-fluid d-flex form-container'>
          <div>
            {userLocation.location ?
              <label htmlFor="location-input">Location currently set to {userLocation.location}</label>
              :
              <label htmlFor="location-input">Set your location: </label>
            }
          </div>
          <input
            type="text"
            className='form-control me-2 crunch nav-location-input'
            id='location-input'
            name='location'
            value={formData.location}
            onChange={handleChange}
            placeholder='Washington, DC or 20001'
            required
          />
          <button
            type='submit'
            className='btn btn-primary crunch location-button'
            disabled={!validForm}
          >
            Set
          </button>
        </div>
      </form>
    </main>
  )
}

export default Landing
