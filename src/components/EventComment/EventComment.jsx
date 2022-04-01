import { useEffect, useState, useRef } from 'react'

const EventComment = ({ user, handleAddEventComment, event }) => {
  const formElement = useRef()
  const [formData, setFormData] = useState({
    owner: user.name,
    comment: ''
  })
  const [validForm, setValidForm] = useState(false)
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setFormData(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name] : evt.target.value})
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddEventComment(formData, event.id)
    setFormData({
      owner: user.name,
      comment: '',
    })
  }
  return (
    <>
      <form 
        autoComplete="off" 
        ref={formElement} 
        onSubmit={handleSubmit}
      >
        <label htmlFor="comment">
          Comment: 
        </label>
        <textarea 
          name='comment'
          className="event-comment-form"
          value={formData.comment}
          onChange={handleChange}
          required
        />
        <div className='add-btn'>
          <button 
            className='btn'
            type='submit'
            disabled={!validForm}
          >
            Add Comment
          </button>
        </div>
      </form>
    </>
  );
}
 
export default EventComment;