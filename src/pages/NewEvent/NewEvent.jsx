import { useState, useRef, useEffect } from 'react'

const NewEvent = (props) => {
  const [formData, setFormData] = useState({ //Edit this to reflect the event model in the backend if things are added/removed to it
    name: '',
    brewery: props.breweries[0]._id,
    timeDate: '',
    description: '',
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
    await props.handleNewEvent(formData)
  }

  return (
    <>
      <h1 className='event-add-edit-header'>Schedule an Event</h1>
      <form autoComplete='off' ref={formElement} onSubmit={handleSubmit} className='event-add-edit-form'>
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
            value={formData.textArea}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type='submit'
            className='btn btn-success'
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