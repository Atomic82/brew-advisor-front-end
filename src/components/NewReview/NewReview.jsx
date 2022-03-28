import { useState, useEffect, useRef } from 'react'

const NewReview = ({ props }) => {
  const formElement = useRef()
  const [reviewFormData, setReviewFormData] = useState({})
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    formElement.current.checkValidity() ?
    setValidForm(true) : setValidForm(false)
  }, [reviewFormData])

  const handleChange= evt => {
    setReviewFormData({...reviewFormData, [evt.target.name]: evt.target.value})
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(reviewFormData)
    props.handleAddReview(reviewFormData)
  }

  return ( 
    <>
      <h2>Your Review</h2>
      <div>
      <form onSubmit={handleSubmit} autoComplete='off' ref={formElement}>
        <label htmlFor="comment">
          Feedback:
        </label>
        <textarea value={reviewFormData.comment} onChange={handleChange} />
        <div className="add-review">
          <button
            type='submit'
            disabled={!validForm}
          >
            Add Review
          </button>
        </div>
      </form>

      </div>
    </>
  );
}
 
export default NewReview