import { useState, useRef, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const EditEvent = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.event)
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
        {/* <div> */}
          {/* <label htmlFor="brewery-input">Which brewery do you want to go to?</label> */}
          {/* final version will be used a select input that has all the breweries listed */}
          {/* <input
            type="text"
            id='brewery-input'
            name='brewery'
            value={formData.brewery}
            onChange={handleChange}
            required
          /> */}
        {/* </div> */}
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