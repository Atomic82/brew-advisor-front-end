import { useState, useRef, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const EditEvent = (props) => {
  const location = useLocation()
  const event = location.state.event
  const [formData, setFormData] = useState(event)
  const [validForm, setValidForm] = useState(true)
  
  const formElement = useRef()
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

	const handleSubmit = async evt => {
		evt.preventDefault()
    console.log(formData)
    await props.handleUpdateEvent(formData)
	}

  return (
    <>
      <h1>Schedule an Event</h1>
      <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Name Your Event</label>
          <input
            type="text"
            id='name-input'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="brewery-select">Which brewery do you want to go to? (Based on your current location)</label>
          <select
            type="text"
            id='brewery-select'
            name='brewery'
            value={formData.brewery}
            onChange={handleChange}
            required
          >
            {props.breweries?.map(brewery => 
              <option key={brewery.id} value={brewery.id}>
                {brewery.name}
              </option>
            )}
          </select>
        </div>
        <div>
          <label htmlFor="timeDate-input">When do you want to schedule this event?</label>
          <input
            type='datetime-local'
            id='timeDate-input'
            name='timeDate'
            value={formData.timeDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description-input">Write a description about your event:</label>
          <textarea
            id='description-input'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type='submit'
            disabled={!validForm}
          >
            Save Changes to Event
          </button>
          <Link
            to={"/events"}
          >
            Cancel Changes
          </Link>
        </div>
      </form>
    </>
  );
}


export default EditEvent;