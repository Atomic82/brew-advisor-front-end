import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ user, handleLogout, userLocation, handleChangeSetLocation }) => {
  const formElement = useRef()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    location: '',
  })
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    formElement.current?.checkValidity() ?
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
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to="/breweries">Breweries</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/new">Make a new Event?</Link></li>
          </ul>
          {userLocation.location ?
            <div>
              <p>Location set to {userLocation.location}</p>
              <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="location-input">Change your location :</label>
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
              </form>
            </div>
            :
            <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="location-input">Set your location:</label>
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
            </form>
          }
        </nav>
        :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/breweries">Breweries</Link></li>
            {userLocation.location ?
              <div>
                <p>Location set to {userLocation.location}</p>
                <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="location-input">Change your location :</label>
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
                </form>
              </div>
              :
              <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="location-input">Set your location:</label>
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
              </form>
            }
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
