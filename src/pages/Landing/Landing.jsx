import styles from './Landing.module.css'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = ({ user, handleChangeSetLocation }) => {
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

  const handleChange= evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  const handleSubmit = async evt => {
    evt.preventDefault()
    await handleChangeSetLocation(formData)
    navigate('/breweries')
  }

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
      <div>
          <label htmlFor="location-input">Set your location :</label>
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
    </main>
  )
}

export default Landing
