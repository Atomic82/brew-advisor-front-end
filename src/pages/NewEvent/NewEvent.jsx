import { useState, useRef, useEffect } from 'react'

const NewEvent = (props) => {
  const [formData, setFormData] = useState({ //Edit this to reflect the event model in the backend if things are added/removed to it
    name: '',
    brewery: '',
    timeDate: '',
  })
  const [validForm, setValidForm] = useState(false)

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
    await props.handleNewEvent(formData)
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
          <label htmlFor="brewery-select">Which brewery do you want to go to?</label>
          {/* final version will be used a select input that has all the breweries listed */}
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
          <button
            type='submit'
            disabled={!validForm}
          >
            Schedule Event
          </button>
        </div>
      </form>
    </>
  );
}


export default NewEvent;