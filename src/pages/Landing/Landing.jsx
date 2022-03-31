import styles from './Landing.module.css'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = ({ user, handleChangeSetLocation, userLocation }) => {
  const formElement = useRef()
  const navigate = useNavigate()
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
      <img src="https://i.imgur.com/F6STzn1.png" alt="ba-tag" />
      <h1>Welcome to Brew Advisor</h1>
      <h2>BrewAdvisor is a site that facilitates social gatherings and fun with friends. Who doesn't love a brewery? Who doesn't love catching up with old friends? Users may search for local breweries and leave reviews of your previous visits. You can check out that local spot on Yelp. Registered users are allowed to create and respond to events and get togethers!</h2>
      <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
        <div>
          {userLocation.location && <p>Location set to {userLocation.location}</p>}
          <div>
            {userLocation.location ?
              <label htmlFor="location-input">Change your location:</label>
              :
              <label htmlFor="location-input">Please set your location to find local breweries:</label>
            }
            <input
              type="text"
              id='location-input'
              name='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='Washington, DC or 20001'
              required
            />
          </div>
          <div>
            <button
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
