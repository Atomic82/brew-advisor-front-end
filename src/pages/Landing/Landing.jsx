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
        <img src="https://i.imgur.com/F6STzn1.png" alt="ba-tag" />
        <h1>Welcome to Brew Advisor</h1>
        <h2>BrewAdvisor is a site that facilitates social gatherings and fun with friends. Who doesn't love a brewery? Who doesn't love catching up with old friends? Users may search for local breweries and leave reviews of your previous visits. You can check out that local spot on Yelp. Registered users are allowed to create and respond to events and get togethers!</h2>
      </div>
      <form autoComplete='off' ref={formElement} onSubmit={handleSubmit} className='location-form'>
        <div>
          {userLocation.location && <p className='location-indicator'>Location set to {userLocation.location}</p>}
          <div>
            {userLocation.location ?
              <label htmlFor="location-input" className='location-label'>Change your location:</label>
              :
              <label htmlFor="location-input" className='location-label'>Please set your location to find local breweries:</label>
            }
            <input
              type="text"
              id='location-input'
              className='location-input'
              name='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='Washington, DC or 20001'
              required
            />
          </div>
          <div>
            <button
              className='location-submit-btn'
              type='submit'
              disabled={!validForm}
            >
              Set Location
            </button>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Landing
