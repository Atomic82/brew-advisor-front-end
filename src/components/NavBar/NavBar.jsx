import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, handleLogout, userLocation, handleChangeSetLocation, breweries }) => {
  const formElement = useRef()
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
    setFormData({ location: '' })
  }

  return (
    <>
        <nav className='navbar fixed-top'>
          <div className='container-fluid'>
            <Link to="/" className='navbar-brand'><img className="w-25 h-25" src="https://i.imgur.com/o9LbJPR.png" alt="ba-logo" />
              {user && <>Welcome, {user.name}!</>}
              </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">...</span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profiles
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {user ?
                      <>
                        <li><Link className="dropdown-item" to="/profiles">All Profiles</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/changePassword">Change Password?</Link></li>
                        <li><Link className="dropdown-item" to="" onClick={handleLogout}>Logout?</Link></li>
                      </>
                      :
                      <>
                        <li><Link className="dropdown-item" to="/login">Log In</Link></li>
                        <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                      </>
                    }
                  </ul>
                </li>
                <li className='nav-item'><Link className='nav-link' to="/breweries">Breweries</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/events">Events</Link></li>
                {(breweries.length, user) && <li><Link className='nav-link' to="/new">New Event?</Link></li>}
              </ul>
              <form className='d-flex' autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
                <div className='container-fluid'>
                  <div>
                    {userLocation.location ?
                      <label htmlFor="location-input">Location currently set to {userLocation.location}</label>
                      :
                      <label htmlFor="location-input">Set your location:</label>
                    }
                  </div>
                  <input
                    type="text"
                    className='form-control me-3'
                    id='location-input'
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                    placeholder='Washington, DC or 20001'
                    required
                  />
                  <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={!validForm}
                  >
                    Set Location
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
    </>
  )
}

export default NavBar
